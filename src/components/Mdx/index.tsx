import { useMDXComponent } from "next-contentlayer/hooks";

import { MDXComponents } from "mdx/types";

import "@/styles/mdx.css";

const components: MDXComponents = {
  h1: ({ className = "", children, ...props }) => (
    <h1
      className={`text-3xl font-black ${className} text-neutral-900`}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ className = "", children, ...props }) => (
    <h2 className={`text-2xl font-black ${className}`} {...props}>
      {children}
    </h2>
  ),
  h3: ({ className = "", children, ...props }) => (
    <h3 className={`text-xl font-black ${className}`} {...props}>
      {children}
    </h3>
  ),
  h4: ({ className = "", children, ...props }) => (
    <h4 className={`text-lg font-black ${className}`} {...props}>
      {children}
    </h4>
  ),
  h5: ({ className = "", children, ...props }) => (
    <h5 className={`text-base font-black ${className}`} {...props}>
      {children}
    </h5>
  ),
  h6: ({ className = "", children, ...props }) => (
    <h6 className={`text-sm font-black ${className}`} {...props}>
      {children}
    </h6>
  ),
  a: ({ className = "", children, ...props }) => (
    <a
      className={`hover:brightness-80 text-link transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </a>
  ),
  p: ({ className = "", children, ...props }) => (
    <p className={`mb-4 text-lg leading-relaxed ${className}`} {...props}>
      {children}
    </p>
  ),
  pre: ({ className = "", children, ...props }) => (
    <pre
      className={`text-md mb-4 mt-6 overflow-x-auto rounded-lg py-4 ${className}`}
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ className = "", children, ...props }) => (
    <code className={`text-mb relative rounded ${className}`} {...props}>
      {children}
    </code>
  )
};

type MdxProps = {
  code: string;
};

export const Mdx = ({ code = "" }: MdxProps) => {
  const Component = useMDXComponent(code);

  return (
    <div>
      <Component components={components} />
    </div>
  );
};
