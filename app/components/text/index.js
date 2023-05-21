import { Text as TextView } from 'react-native';
import React from 'react';
import { Fonts } from '../../assets/styles';
import font from '../../assets/font';

const Text = ({ children, color ='#160520', fontSize = 18, regular = true, bold = false, semiBold = false, style, ...props }) => {
  return (
    <TextView
      {...props}
      style={[
        style,
        { fontSize: fontSize, color: color, lineHeight:fontSize*1.5},
        regular && { fontFamily: Fonts.Nunito.Regular }, 
        bold && {fontFamily: Fonts.Nunito.Bold},
        semiBold && {fontFamily: Fonts.Nunito.BoldItalic}
      ]}
    >
      {children}
    </TextView>
  );
};

export default Text;
