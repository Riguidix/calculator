import { useSelector } from "react-redux";

function Screen() {
    const actual = useSelector((state) => state.actual.value);
    const ans = useSelector((state) => state.ans.value);
    const sign = useSelector((state) => state.sign.value);
    const history = useSelector((state) => state.history.value);

    return (
        <div className='grid grid-rows-2 h-1/4 p-2 pr-5 w-full'>
            <div className='flex font-light items-center justify-end row-span-1 text-2xl text-slate-500 w-full'>
                { (history === '') ? 0 : history }
            </div>

            <div className='flex font-light items-center justify-end row-span-1 overflow-hidden text-left h-full text-6xl text-white w-full'>
                { (actual !== 0 && sign !== '=') ? actual : ans }
            </div>
        </div>
    )
}

export default Screen;