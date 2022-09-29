# Shrek intelligence software

> Shrek intelligence software is designed for ease of use, to provide  a visual interface for machine learning

[Github repository](https://github.com/paxkym/Shrek-intelligence-software)


### Basic function

Shrek intelligence software is created for the usage of CNN's, and it contains many tools to help use them. 
***

##### Data types:


###### Shrekimage
Stores a grayscale image

The Shrekimage data type is constituted of a JavaScript array as follows:

`[[width, height], [b/w pixel array from values 0-255], "SHREKIMAGE"]`

###### Shrekarray
Stores an array of input data for a network
`[[], [Integer array], "SHREKARRAY"]`

***
##### Creating an input 

Go to the `+` icon, and you will recieve a pop-up window asking for the type of items you want to add to your workspace. There are four options:

- Input
- Output 
- Network 
- Action

Choose the one Titled 'input', and Select from the following subtypes:
###### Canvas:

When you initialize a canvas, it will create a popup window containing a canvas, of which you can draw upon. The output data is stored in the form of a Shrekimage

###### Image:

Creates a popup window asking for an image. Output data is in the form of a Shrekimage

###### Folder:

Creates a popup window asking for a directory containing images. Output data is in the form of an array of Shrekimages

###### Text: 

Asks for text. Output data is in the form of a text string

###### Camera data:

Creates a popup window showing the current camera state, with a capture button to take a photo. Output data is in the form of a Shrekimage

***
##### Creating an action

Create an action in the `+` menu.
You will choose any action that you want to use, given that the input and output type are correct.
After, Choose one of the following actions:
###### Execute JavaScript:

Executes the javascript code that has been provided to the tab. The tab input is accessible inside of the `io.input` variable, and the output is accessible through `io.output`. To store data throughout all tabs which execute javascript code, use the `io.global` array.
If you want to utilize this, please study the section on 

###### Image:

Creates a popup window asking for an image. Output data is in the form of a Shrekimage

###### Folder:

Creates a popup window asking for a directory containing images. Output data is in the form of an array of Shrekimages

###### Text: 

Asks for text. Output data is in the form of a text string

###### Camera data:

Creates a popup window showing the current camera state, with a capture button to take a photo. Output data is in the form of a Shrekimage














