import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 600px;
  margin: 0 auto;
  border: 1px solid #d1d1d1;
  padding: 25px;
  border-radius: 8px;
`;
export const InputBox = styled.div<{direction?: 'column' | 'row'}>`
  width: 100%;
  display: flex;
  flex-direction: ${({direction}) => direction || 'row'};
  margin: 12px 0px;
`;
export const InputText = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  border-bottom: 1px solid #757ce8;
`;

export const InputLabel = styled.label`
  color: #002884;
  font-size: 12px;
`;

type PropsButton = {
  color?: string;
  textColor?: string;
}
export const Button = styled('input').attrs({
  type: 'submit'
})<PropsButton>`
  width: 100%;
  background-color: ${({color}) => color || '#757ce8'};
  color: ${({textColor}) => textColor || '#fff'};
  padding: 24px;
  border-radius: 8px;
  border: 0px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const FormBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  color: #002884;
  text-align: center;
`;