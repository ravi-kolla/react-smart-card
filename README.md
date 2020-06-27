# react-smart-card
React Smart Card Component is a multipurpose card component with features to show simple card component or card with link or button. Various color options can be set from the given style guide.
Smart Card component can be addapted to any layout by wrapping it any coloum grid.

## Installation
```
npm install --save react-smart-card

import SmartCard from 'react-smart-card';
```

## Usage
```javascript
import React from 'react';
import { render } from 'react-dom';
import SmartCard from 'react-smart-card';

function App() {
    //data can be stored in a variable
    const headingText = "heading";

    //data can be stored in a object
    const myObj = {
      heading: 'heading',
      des: 'description',
      linkText: 'Read More',
      linkColor: 'link-green',
      linkUrl: 'https://www.npmjs.com/package/react-smart-card'
    };
    //data can be simply passed as sting as well
    return (
        <div className="flex container">
            <div className="col-md-4 pad-responsive">
                <SmartCard heading={headingText} description="React smart card component" />
            </div>
            <div className="col-md-4 pad-responsive">
                <SmartCard heading={myObj.heading} description={myObj.des} linkText={myObj.linkText} linkColor={myObj.linkColor} linkUrl={myObj.linkUrl}/>
            </div>
            <div className="col-md-4 pad-responsive">
                <SmartCard heading="heading" description="React smart card component" buttonUrl="/path" buttonText="Know More" buttonColor="button-blue"/>
            </div>
        </div>
    );
}

export default App;
```
