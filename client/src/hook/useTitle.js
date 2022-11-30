import { useEffect } from "react";
const useTitle = (title) => {
  useEffect(() => {
    document.title = `PlumBoy | ${title}`;
  }, [title]);
};
export default useTitle;
