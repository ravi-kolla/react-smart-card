# react-smart-card
React Smart Card Component is a multi purpose / multi variant card component with features shown below. Add any color to card contents! No limitation.  
Component can be adapted to any layout by simply wrapping it in the grid or columns markup.

## Installation
```
npm install react-smart-card --save
```

## Usage
```javascript

import SmartCard from 'react-smart-card';

function App() {
    //data can be stored in a variable
    const headingText = "heading";

    //data can be stored in a object
    const myObj = {
      heading: 'heading',
      des: 'description',
      linkText: 'Read More',
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
            <SmartCard title={myObj.heading} des={myObj.des} linkText={myObj.linkText} linkUrl={myObj.linkUrl}/>
          </div>
        </div>
      </>
    );
}

export default App;
```  

# UI Variations

```javascript
<div className="flex container">
  <div className="col-md-4 pad">
    <SmartCard title="Header" des="Description" />
  </div>
  <div className="col-md-4 pad">
    <SmartCard title="Header" des="Description" linkUrl="/path" linkText="Read More" />
  </div>
  <div className="col-md-4 pad">
    <SmartCard title="Header" des="Description" btnUrl="/path" btnText="Know More" />
  </div>
</div>
<div className="flex container">
  <div className="col-md-4 pad">
    <SmartCard imgSrc="/image-path" />
  </div>
  <div className="col-md-4 pad">
    <SmartCard imgSrc="/image-path" title="Header" des="Description" btnUrl="/path" btnText="Know More"
               titleColor="orange" desColor="red" btnBg="orange" btnColor="white"/>
  </div>
</div>
```

###### How does it look?
![Alt text](screen-shots/react-smart-card1.PNG?raw=true "React Smart Card")  
![Alt text](screen-shots/react-smart-card2.PNG?raw=true "React Smart Card")

###### Image Overlay Card
To enable image overlay card component pass the prop cardType="rsc-overlay"

```javascript
<div className="flex container">
  <div className="col-md-4 pad">
    <SmartCard cardType="rsc-overlay" imgSrc="/path" title="Header" des="Description" subText="Last updated 2 mins ago" />
  </div>
  <div className="col-md-4 pad">
    <SmartCard cardType="rsc-overlay" imgSrc="/path" title="Header" des="Description" subText="Last updated 2 mins ago" linkUrl="/path" linkText="Read More" />
  </div>
  <div className="col-md-4 pad">
    <SmartCard cardType="rsc-overlay" imgSrc="/path" title="Header" des="Description" subText="Last updated 2 mins ago" btnUrl="/path" btnText="Know More" />
  </div>
</div>
```  

![Alt text](screen-shots/card-overlay.PNG?raw=true "React Smart Card")

###### Image Horizontal Card
To enable image horizontally to right or left in the card component pass the prop cardType either "rsc-image-left" or "rsc-image-right"

```javascript
<div className="flex container">
  <div className="col-md-4 pad">
    <SmartCard cardType="rsc-image-left" imgSrc="/path" title="Header" des="Description" authorImg="/path" authorName="Ravi Teja Kolla" subText="Feb 29, 2020" />
  </div>
  <div className="col-md-4 pad">
    <SmartCard cardType="rsc-image-right" imgSrc="/path" title="Header" des="Description" btnUrl="/path" btnText="Read More" />
  </div>
  <div className="col-md-4 pad">
    <SmartCard cardType="rsc-image-right" imgSrc="/path" title="Header" des="Description" linkUrl="/path" linkText="Know More" />
  </div>
</div>
```  

![Alt text](screen-shots/sideImage1.PNG?raw=true "React Smart Card")
![Alt text](screen-shots/sideImage2.PNG?raw=true "React Smart Card")

# Style Guide

###### Default Colors
Title : Black <br />
Description : Black <br />
Link : Blue <br />
Button Text : White <br />
Button Background : Blue

###### Link Text Themes
![Alt text](screen-shots/link-themes.PNG?raw=true "Link Text Themes")  
Link theme is selected by passing value to linkTheme prop  
**Example**
```
linkTheme='rsc-link-green'
```

###### Button Themes
![Alt text](screen-shots/button-themes.PNG?raw=true "Button Themes")  
Button theme is selected by passing value to btnTheme prop  
**Example**
```
btnTheme='rsc-btn-green'
```

###### Custom Colors
You can choose custom colors by passing color CSS values as props.  
**Examples**
```
titleColor="#000", desColor="black", linkColor="rgba(180, 44, 1, 1)", btnBg="orange", btnColor="white"
```

# Release Notes
v0.4.0 Horizontal Image variant added
v0.3.0 Image Overlay Variant added
v0.2.0 Image card & Card component with Image & text added
v0.1.0 Text card component added

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
