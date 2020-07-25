# react-smart-card
React Smart Card Component is a multi purpose / multi variant card component with features to show simple card component or card with link or button & image. Power is with you!   
Add any color to card contents! No limitation.  
Component can be adapted to any layout by simply wrapping it in the grid or columns markup.

## Installation
```
npm install --save react-smart-card
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
    //data can be simply passed as string as well
    return (
      <>
        <div className="flex container">
          <div className="col-md-4 pad-responsive">
            <SmartCard title={headingText} des="Text color can be customized" />
          </div>
          <div className="col-md-4 pad-responsive">
            <SmartCard title={myObj.heading} des={myObj.des} linkText={myObj.linkText} linkColor={myObj.linkColor} linkUrl={myObj.linkUrl}/>
          </div>
          <div className="col-md-4 pad-responsive">
            <SmartCard title="Card component with button" des="Button default theme is blue & you can choose either Green or Red themes or you can specify any color you like! " btnUrl="/path" btnText="Know More" btnTheme="btn-green"/>
          </div>
        </div>
        <div className="flex container">
          <div className="col-md-4 pad-responsive">
            <SmartCard imgSrc={myObj3.image} altText="sample image"/>
          </div>
          <div className="col-md-4 pad-responsive">
            <SmartCard imgSrc={myDataObj.image} altText="sample image"
                      title={myDataObj.heading} titleColor="orange"
                      des={myDataObj.des} desColor="red"
                      btnText={myDataObj.btnText} btnUrl={myDataObj.btnUrl}
                      btnBg="orange" btnColor="white"/>
          </div>
        </div>
      </>
    );
}

export default App;
```  
# UI Variations

###### How does it look?
![Alt text](screen-shots/react-smart-card1.PNG?raw=true "React Smart Card")  
![Alt text](screen-shots/react-smart-card2.PNG?raw=true "React Smart Card")

###### Image Overlay Card
To enable image overlay card component pass the prop cardType="overlay"

![Alt text](screen-shots/card-overlay.PNG?raw=true "React Smart Card")

# Style Guide

###### Default Colors
Title : Black
Description : Black
Link : Blue
Button Text : White
Button Background : Blue

###### Link Text Themes
![Alt text](screen-shots/link-themes.PNG?raw=true "Link Text Themes")  
Link theme is selected by passing value to linkTheme prop  
**Example**
```
linkTheme='link-green'
```

###### Button Themes
![Alt text](screen-shots/button-themes.PNG?raw=true "Button Themes")  
Button theme is selected by passing value to btnTheme prop  
**Example**
```
btnTheme='btn-green'
```

###### Custom Colors
You can choose custom colors by passing color CSS values as props.  
**Examples**
```
titleColor="#000", desColor="black", linkColor="rgba(180, 44, 1, 1)", btnBg="orange", btnColor="white"
```
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
