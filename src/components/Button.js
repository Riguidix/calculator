import { useSelector, useDispatch } from 'react-redux';
import { incrementActualValue, clearActual, setActual } from '../features/actual/actualSlice';
import { incrementHistory, clearHistory } from '../features/history/historySlice';
import { setSign, clearSign} from '../features/sign/signSlice';
import { setAns, clearAns } from '../features/ans/ansSlice';
import { setOldValue, clearOldValue } from '../features/oldValueSlice/oldValueSlice';
import { useEffect } from 'react';

function Button(props) {
    let style = 'bg-slate-700 border border-slate-600 flex text-2xl items-center select-none justify-center h-full w-full';

    const actual = useSelector((state) => state.actual.value);
    const oldValue = useSelector((state) => state.oldValue.value);
    const sign = useSelector((state) => state.sign.value);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAns(oldValue));
    }, [oldValue]);

    function handleClick() {
        switch (props.value) {
            case 'clear':
                dispatch(clearActual());
                dispatch(clearHistory());
                dispatch(clearOldValue());
                dispatch(clearSign());
                dispatch(clearAns());
                break;
            case 'one': case 'two': case 'three': case 'four': case 'five': case 'six': case 'seven': case 'eight': case 'nine':
                dispatch(incrementActualValue(props.label));
                dispatch(incrementHistory(props.label));

                break;
            default:
                if (props.label !== '=') {
                    dispatch(incrementHistory(props.label));
                }

                dispatch(setSign(props.label));

                switch (sign) {
                    case '+ / -':
                        dispatch(setOldValue(parseInt(oldValue) * -1));
                        break;
                    case '/':
                        dispatch(setOldValue(parseInt(oldValue) / parseInt(actual)));
                        break;
                    case 'X':
                        dispatch(setOldValue(parseInt(oldValue) * parseInt(actual)));
                        break;
                    case '-':
                        dispatch(setOldValue(parseInt(oldValue) - parseInt(actual)));
                        break;
                    case '+':
                        dispatch(setOldValue(parseInt(oldValue) + parseInt(actual)));
                        break;
                    case '=':
                        dispatch(setAns(parseInt(oldValue)));
                        break;
                    default:
                        dispatch(setOldValue(actual));
                        break;
                }
                dispatch(clearActual());
                break;
        }
    }

    return (
        <button onClick={ handleClick } className={ style + ' ' + props.style}>
            { props.label }
        </button>
    );
}

export default Button;