#!/bin/bash
directory="../"

# Get current date and time for the report folder
current_date=$(date +"%Y-%m-%d")
current_hour=$(date +"%H")
current_minute=$(date +"%M")
report_directory="./codebase/report_${current_date}_${current_hour}${current_minute}"

# Define the base output file path within the new report directory
output_file_base="${report_directory}/content"
output_file_suffix=".md"
current_file_number=1
current_line_count=0
max_lines=400000000
window=40  # Define a window of +-40 lines
log_file="${report_directory}/script_log.txt"

# Create report directory
mkdir -p "$report_directory"

# Initialize statistics
total_files_processed=0
total_word_count_before=0
total_word_count_after=0
initial_file_count=$(find "${output_file_base}_*" 2>/dev/null | wc -l)

# Logging function
log() {
    echo "$(date): $1" | tee -a "$log_file"
}

# Clean codebase directory and prepare report directory
log "Preparing report directory..."
rm -rf "$report_directory/*" 2>/dev/null  # Clean any existing files in report directory

# Filters for React project files and directories to ignore
filters=(
    ! -name "package-lock.json"
    ! -name "yarn.lock"
    ! -path "*/build/*"
    ! -path "*/.cache/*"
    ! -path "*/coverage/*"
    ! -path "*/public/*"
    ! -path "*/.git/*"
    ! -path "*/node_modules/*"
    ! -path "*/.next/*"
    ! -name "*.log"
    ! -name "*.test.js"
    ! -name "*.spec.js"
    ! -name "*.DS_Store"
    ! -name "*.env*"
    ! -name "*.jpg"
    ! -name "*.png"
    ! -name "*.gif"
    ! -name "*.css"
    ! -name "*.scss"
    ! -name "*.pyc"
    ! -name ".git"
    ! -name ".gitignore"
    ! -name ".eslintignore"
    ! -name ".eslintrc.js"
    ! -name "README.md"
    ! -name "LICENSE"
    ! -name "*.md"
    ! -path "*/__mocks__/*"
    ! -path "*/__tests__/*"
    ! -path "*/__snapshots__/*"
    ! -path "*/.storybook/*"
    ! -path "*/.husky/*"
    ! -path "*/tools/*"

)

# Processing loop for files
find "$directory" -type f "${filters[@]}" -print0 | while IFS= read -r -d '' file; do

    # Determine the filename for the current output
    current_output_file="${output_file_base}_${current_file_number}${output_file_suffix}"

    # Print the file name at the beginning of each context file
    echo "*** $file ***" >> "$current_output_file"

    file_lines=$(wc -l < "$file")
    file_words=$(wc -w < "$file")
    total_files_processed=$((total_files_processed + 1))
    total_word_count_before=$((total_word_count_before + file_words))

    file_lines=$((file_lines + 2)) # Add extra lines for the header and footer

    remaining_lines=$((max_lines - current_line_count))
    
    # Check if current file exceeds the max line count
    if (( remaining_lines < window || current_line_count + file_lines > max_lines )); then
        current_line_count=0
        ((current_file_number++))
        current_output_file="${output_file_base}_${current_file_number}${output_file_suffix}"
        echo "*** $file ***" >> "$current_output_file" # Print filename for new file
    fi

    # Concatenate file content to the output
    cat "$file" >> "$current_output_file"
    echo "--------------------------------------------------" >> "$current_output_file"
    
    current_line_count=$((current_line_count + file_lines))
    total_word_count_after=$((total_word_count_after + file_words))

done < <(find "$directory" -type f "${filters[@]}" -print0)

# Log final statistics
log "Directory structure and file content have been saved to the report directory."
log "Total word count before: $total_word_count_before"
log "Total word count after: $total_word_count_after"
log "Total output files generated: $(($current_file_number - 1))" # Subtract 1 because file number increments before checking if a new file is needed
log "Total files processed: $total_files_processed"
log "Difference in files (Processed - Initial): $((total_files_processed - initial_file_count))"

# Generate a tree based on filters and save it to the report directory
log "Generating project tree..."
tree_output_file="${report_directory}/content_tree.md"
tree "$directory" --noreport --dirsfirst -I "node_modules|build|.cache|coverage|public|.git|.next|__mocks__|__tests__|__snapshots__|.storybook|.husky|tools" | tee "$tree_output_file"
