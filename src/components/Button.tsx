import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import cpstyles from '../styles/CPStyles';
type ButtonProps = {
    title: string;
    onClick: any;
    color?: string;
    isDisabled?: boolean;
};


function CPButton({ title, onClick, color, isDisabled = false }: ButtonProps): JSX.Element {
    return (
        <TouchableOpacity
            onPress={onClick}
            disabled={isDisabled}>
            <View style={[cpstyles.button_back]}>

                <Text style={cpstyles.button_text}>{title}</Text>

            </View>
        </TouchableOpacity>
    );
}

export { CPButton };