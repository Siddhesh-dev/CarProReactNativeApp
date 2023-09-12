import {
    Text,
    TextInput,
    View, KeyboardAvoidingView
} from 'react-native';
import cpstyles from '../styles/CPStyles';
import AppConfig from '../utils/AppConfig';

type TextInputProps = {
    title: string;
    hint?: string;
    value: string;
    maxlenght?: number;
    onChangeText: any;
};


function CPTextInput({ title, hint, value, onChangeText, maxlenght }: TextInputProps): JSX.Element {
    return (

        <View style={{ padding: 10 }}>
            <Text style={cpstyles.text_input_label}>{title}</Text>
            <TextInput
                placeholder={hint}
                value={value}
                style={cpstyles.text_input_text}
                onChangeText={onChangeText}
                maxLength={maxlenght}

            ></TextInput>
        </View>

    );
}

function CPTextInputNumber({ title, hint, value, onChangeText, maxlenght }: TextInputProps): JSX.Element {
    return (
        <View style={{ padding: 10 }}>
            <Text style={cpstyles.text_input_label}>{title}</Text>
            <TextInput
                placeholder={hint}
                value={value.replace(/[^0-9]/g, '')}
                style={cpstyles.text_input_text}
                onChangeText={onChangeText}
                maxLength={maxlenght}
                keyboardType='numeric'

            ></TextInput>
        </View>
    );
}

function CPTextInputEmail({ title, hint, value, onChangeText, maxlenght }: TextInputProps): JSX.Element {
    return (
        <View style={{ padding: 10 }}>
            <Text style={cpstyles.text_input_label}>{title}</Text>
            <TextInput
                placeholder={hint}
                value={value}
                style={cpstyles.text_input_text}
                onChangeText={onChangeText}
                maxLength={maxlenght}
                keyboardType='email-address'

            ></TextInput>
        </View>
    );
}

function CPTextInputDecimal({ title, hint, value, onChangeText, maxlenght }: TextInputProps): JSX.Element {
    return (
        <View style={{ padding: 10 }}>
            <Text style={cpstyles.text_input_label}>{title}</Text>
            <TextInput
                placeholder={hint}
                value={value}
                style={cpstyles.text_input_text}
                onChangeText={onChangeText}
                maxLength={maxlenght}
                keyboardType='decimal-pad'

            ></TextInput>
        </View>
    );
}

function CPTextInputFuel({ title, hint, value, onChangeText, maxlenght = 1 }: TextInputProps): JSX.Element {
    return (
        <View style={{ padding: 10 }}>
            <Text style={cpstyles.text_input_label}>{title}</Text>
            <TextInput
                placeholder={hint}
                value={value.replace(/[^0-8]/g, '')}
                style={cpstyles.text_input_text}
                onChangeText={onChangeText}
                maxLength={maxlenght}
                keyboardType='numeric'

            ></TextInput>
        </View>
    );
}

type TextInputPasswordProps = {
    title: string;
    hint?: string;
    value: string;
    maxlenght?: number;
    onChangeText: any;
    secureText?: boolean;
};

function CPTextInputPassword({ title, hint, value, onChangeText, maxlenght = AppConfig.PASSWORD_LENGHT, secureText = true }: TextInputPasswordProps): JSX.Element {
    return (
     
            <View style={{ padding: 10 }}>
                <Text style={cpstyles.text_input_label}>{title}</Text>
                <TextInput
                    placeholder={hint}
                    value={value}
                    style={cpstyles.text_input_text}
                    onChangeText={onChangeText}
                    maxLength={maxlenght}
                    secureTextEntry={secureText}

                ></TextInput>
            </View>
       
    );
}

export { CPTextInput, CPTextInputNumber, CPTextInputEmail, CPTextInputDecimal, CPTextInputFuel, CPTextInputPassword };