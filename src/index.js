import React from 'react';
import ReactDOM from 'react-dom';
function MyApp() {
    return (
        <div>
               <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <h3>Hello world</h3>
        
        </div>
         
    )
}

ReactDOM.render(
    < MyApp />,
    document.getElementById("root")
    )
