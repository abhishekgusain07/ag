import { cn } from "@/lib/utils";

const Email = ({ className }: { className?: string }) => {
  return (
    <svg
      width="14"
      height="14"
      className={cn("mr-1.5", className)}
      data-icon="email"
    >
      {" "}
      <symbol id="ai:local:email" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.4 339.2a63.9 63.9 0 0 1-76.8 0z"
        ></path>
      </symbol>
      <use href="#ai:local:email"></use>{" "}
    </svg>
  );
};
export default Email;
