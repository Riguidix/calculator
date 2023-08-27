import ButtonLayout from './ButtonLayout';
import Screen from './Screen';

function Layout() {
    return (
        // TODO: Make the grid approach or use the height one
        <div className='bg-slate-600 border border-black h-5/6 rounded-lg w-1/3'>
            <Screen />
            <ButtonLayout />
        </div>
    )
}

export default Layout;