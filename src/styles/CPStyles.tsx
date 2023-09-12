import { StyleSheet } from 'react-native'
import CP_Color from './CP_Color'

const textcolor: string = CP_Color.textColor;
const labelcolor: string = CP_Color.tableHeaderColor;
const border_color: string = 'grey';
const border_radious: number = 5;
const border_width: number = 2;
const text_margin: number = 5;
const text_padding: number = 5;
const text_fontsize: number = 14;
const label_fontsize: number = 14;
const text_backgroundcolor: string = CP_Color.textBackgroundColor;
const buttonTextColor: string = CP_Color.buttonTextColor;
const buttonBackgroundColor: string = CP_Color.buttonBackgroundColor;

const cpstyles = StyleSheet.create({
  normal_text: {
    padding: text_padding,
    margin: text_margin,
    color: textcolor,
    fontSize: text_fontsize

  },
  bold_text: {
    padding: text_padding,
    margin: text_margin,
    color: 'black',
    fontWeight: 'bold',
    fontSize: text_fontsize,
  },
  normal_text_with_border: {
    padding: text_padding,
    margin: text_margin,
    color: 'black',
    borderWidth: border_width,
    borderColor: border_color,
    backgroundColor: text_backgroundcolor,
    borderRadius: border_radious,
    textAlign: 'justify',
    fontSize: text_fontsize,
  },

  bold_text_with_border: {
    padding: text_padding,
    margin: text_margin,
    color: 'black',
    borderWidth: border_width,
    borderColor: border_color,
    backgroundColor: text_backgroundcolor,
    fontWeight: 'bold',
    borderRadius: border_radious,
    fontSize: text_fontsize,
  },

  bold_label_text: {
    padding: text_padding,
    margin: text_margin,
    color: labelcolor,
    fontWeight: 'bold',
    fontSize: label_fontsize
  },
  text_input_label: {
    color: labelcolor,
    fontWeight: 'bold',
    fontSize: label_fontsize
  },
  text_input_text: {
    color: textcolor,
    fontSize: label_fontsize,
    borderWidth: border_width,
    borderColor: border_color,
    borderRadius: border_radious,
    padding: 10
  },

  button_back: {
    borderWidth: border_width,
    borderColor: buttonBackgroundColor,
    borderRadius: border_radious,
    backgroundColor: buttonBackgroundColor,
    padding: 10,
    alignItems: 'center',
    marginStart:10,
    marginEnd:10
  },

  button_text: {
    fontSize: label_fontsize,
    color: buttonTextColor,
    alignItems: 'center'
  },


});

export default cpstyles;