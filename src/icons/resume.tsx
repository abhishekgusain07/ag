import { cn } from "@/lib/utils";

const Resume = ({ className }: { className?: string }) => {
  return (
    <svg
      width="14"
      height="14"
      className={cn("mr-1.5", className)}
      data-icon="resume"
    >
      {" "}
      <symbol id="ai:local:resume" viewBox="0 0 384 512">
        <path
          fill="currentColor"
          d="M320 464c8.8 0 16-7.2 16-16V160h-80c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16zM0 64C0 28.7 28.7 0 64 0h165.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
        ></path>
      </symbol>
      <use href="#ai:local:resume"></use>{" "}
    </svg>
  );
};

export default Resume;
