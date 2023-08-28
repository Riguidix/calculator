import Button from "./Button";

function ButtonLayout() {
    const buttons = [
        [
            {
                key: 'clear',
                label: 'C',
                style : 'text-red-500'
            },
            {
                key: 'sign',
                label: '+ / -',
                style : 'text-slate-500'
            },
            {
                key: 'percentage',
                label: '%',
                style : 'text-slate-500'
            },
            {
                key: 'division',
                label: '/',
                style : 'text-slate-500'
            },
        ],
        [
            {
                key: 'seven',
                label: '7',
                style : 'text-white'
            },
            {
                key: 'eight',
                label: '8',
                style : 'text-white'
            },
            {
                key: 'nine',
                label: '9',
                style : 'text-white'
            },
            {
                key: 'multiplication',
                label: 'X',
                style : 'text-slate-500'
            },
        ],
        [
            {
                key: 'four',
                label: '4',
                style : 'text-white'
            },
            {
                key: 'five',
                label: '5',
                style : 'text-white'
            },
            {
                key: 'six',
                label: '6',
                style : 'text-white'
            },
            {
                key: 'subtract',
                label: '-',
                style : 'text-slate-500'
            },
        ],
        [
            {
                key: 'one',
                label: '1',
                style : 'text-white'
            },
            {
                key: 'two',
                label: '2',
                style : 'text-white'
            },
            {
                key: 'three',
                label: '3',
                style : 'text-white'
            },
            {
                key: 'addition',
                label: '+',
                style : 'text-slate-500'
            },
        ],
        [
            {
                key: 'zero',
                label: '0',
                style : 'text-white rounded-bl-lg col-span-2'
            },
            {
                key: 'comma',
                label: ',',
                style : 'text-white'
            },
            {
                key: 'equal',
                label: '=',
                style : 'text-slate-500 rounded-br-lg'
            },
        ]
    ];

    return (
        <div className='grid grid-rows-5 h-4/5 overflow-hidden w-full'>
            {
                buttons.map((button, index) => {
                    return (
                        <div className='grid grid-cols-4 row-span-1'>
                            { 
                                button.map((item, index) => {
                                    return (
                                        <Button value={ item.key } label={ item.label } style={ item.style } />
                                    )
                                }) 
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ButtonLayout;