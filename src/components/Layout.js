import ButtonLayout from './ButtonLayout';
import Screen from './Screen';

function Layout() {
    return (
        <div className='bg-slate-600 h-5/6 rounded-lg w-1/4'>
            <Screen />
            <ButtonLayout />
        </div>
    )
}

export default Layout;