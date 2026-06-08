import { forwardRef, InputHTMLAttributes } from "react";
// props will include all the prop of Input

type Props = InputHTMLAttributes<HTMLInputElement> & {
  placeHolder: string;
  id?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { placeHolder, id, ...rest },
  ref,
) {
  return (
    <input
      id={id}
      ref={ref}
      {...rest}
      placeholder={placeHolder}
      className="text-black w-full h-[42px] border border-gray-300 rounded-lg px-4 outline-none focus:border-[#FF2D38] focus:ring-1 focus:ring-[#FF2D38] transition"
    />
  );
});

export default Input;
