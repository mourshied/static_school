This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started



### Pre-requisites
1. [Set up git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) in your host machine with the [credentials manager core](https://github.com/microsoft/Git-Credential-Manager-Core). The credentials manager will let you use the git credentials from your host machine inside the container without any extra step.

### Steps
1. Build and Activate the [Development Container](https://code.visualstudio.com/docs/remote/containers).
   1. Follow the VS Code containers [Getting Started Guide](https://code.visualstudio.com/docs/remote/containers#_getting-started).
   2. Open the repository folder in a container by following [these steps](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-an-existing-folder-in-a-container).

2. Run the development server:

```bash
npm run install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
