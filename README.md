# react-smart-card
React Smart Card Component is a multi purpose / multi variant card component with features to show simple card component or card with link or button. Various color options can be set from the given style guide.
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
### UI Variations

###### How does it look?
![Alt text](screen-shots/react-smart-card.PNG?raw=true "React Smart Card")

### Style Guide

###### Link Text Colors
![Alt text](screen-shots/link-colors.PNG?raw=true "Link Text Colors")

###### Button Colors
![Alt text](screen-shots/button-colors.PNG?raw=true "Button Colors")

### Contact Us

+ Ravi Teja Kolla [linkedin.com](https://www.linkedin.com/in/ravitejakolla)

# License

MIT License

Copyright (c) 2020 Ravi Teja Kolla

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
