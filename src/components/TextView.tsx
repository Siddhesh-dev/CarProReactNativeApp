
import {
    Text,
    View,
} from 'react-native';
import cpstyles from '../styles/CPStyles';


type TextProps = {
    title: string;
    onPress?: any
};


function CPTextView({ title, onPress }: TextProps): JSX.Element {
    return (
        <View >
            <Text onPress={onPress} style={cpstyles.normal_text}>{title}</Text>
        </View>
    );
}

function CPTextViewWithBorder({ title, onPress }: TextProps): JSX.Element {
    return (
        <View >
            <Text onPress={onPress} style={cpstyles.normal_text_with_border}>{title}</Text>
        </View>
    );
}



function CPBoldTextView({ title, onPress }: TextProps): JSX.Element {
    return (
        <View >
            <Text onPress={onPress} style={cpstyles.bold_text}>{title}</Text>
        </View>
    );
}


function CPBoldTextViewWithBorder({ title, onPress }: TextProps): JSX.Element {
    return (
        <View >
            <Text onPress={onPress} style={cpstyles.bold_text_with_border}>{title}</Text>
        </View>
    );
}

function CPLabelTextView({ title, onPress }: TextProps): JSX.Element {
    return (
        <View >
            <Text onPress={onPress} style={cpstyles.bold_label_text}>{title}</Text>
        </View>
    );
}


export {
    CPTextView, CPTextViewWithBorder, CPBoldTextView, CPBoldTextViewWithBorder
    , CPLabelTextView
};