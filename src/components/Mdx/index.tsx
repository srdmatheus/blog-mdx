import { useMDXComponent } from "next-contentlayer/hooks";

import { MDXComponents } from "mdx/types";

import "@/styles/mdx.css";
import { Pre } from "./components/Pre";

const components: MDXComponents = {
  h1: ({ className = "", children, ...props }) => (
    <h1
      className={`text-4xl font-black text-gray-900 no-underline ${className} `}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ className = "", children, ...props }) => (
    <h2 className={`text-3xl font-black text-gray-900 ${className}`} {...props}>
      {children}
    </h2>
  ),
  h3: ({ className = "", children, ...props }) => (
    <h3 className={`text-2xl font-black text-gray-900 ${className}`} {...props}>
      {children}
    </h3>
  ),
  h4: ({ className = "", children, ...props }) => (
    <h4 className={`text-xl font-black text-gray-900 ${className}`} {...props}>
      {children}
    </h4>
  ),
  h5: ({ className = "", children, ...props }) => (
    <h5 className={`text-lg font-bold ${className}`} {...props}>
      {children}
    </h5>
  ),
  h6: ({ className = "", children, ...props }) => (
    <h6 className={`text-base font-bold ${className}`} {...props}>
      {children}
    </h6>
  ),
  a: ({ className = "", children, ...props }) => (
    <a className={`underline underline-offset-4 ${className}`} {...props}>
      {children}
    </a>
  ),
  p: ({ className = "", children, ...props }) => (
    <p
      className={`mb-4 text-lg leading-relaxed text-gray-700/90 ${className}`}
      {...props}
    >
      {children}
    </p>
  ),
  blockquote: ({ className = "", children, ...props }) => (
    <blockquote
      className={`mb-4 mt-6 border-l-2 border-slate-50 pl-6 font-normal italic text-neutral-500 ${className}`}
      {...props}
    >
      {children}
    </blockquote>
  ),
  pre: ({ className = "", children, ...props }) => (
    <Pre {...props} className={className}>
      {children}
    </Pre>
  ),
  code: ({ className = "", children, ...props }) => (
    <code
      className={`text-md relative rounded bg-gray-700 px-[0.4rem] py-[0.1rem] font-mono leading-tight text-gray-50  ${className}`}
      {...props}
    >
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
    <>
      <Component components={components} />
    </>
  );
};
