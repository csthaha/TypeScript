import * as React from 'react';

// export class App extends React.Component<any, any> {

// }

export interface Props {
    name: string,
    enthusiasmLevel?: number;
}

function Hello({name, enthusiasmLevel = 1}: Props) {
    if(enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    )
}

export default Hello;

//helpers
function getExclamationMarks(numChars: number) {
    console.log(Array(numChars + 1).join('!'))
    return Array(numChars + 1).join('!')
}