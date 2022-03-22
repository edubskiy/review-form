import styled, { ThemedStyledFunction } from 'styled-components';
import { StarsLabelProps } from './review-form.types';

export const Container = styled.div`
  position: relative;
  width: 400px;
  color: #111;
  padding: 20px 30px;
  border: 1px solid #444;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ReviewText = styled.div`
  font-size: 22px;
  color: #666;
  font-weight: 500;
`;

export const ReviewEdit = styled.div`
  font-size: 16px;
  color: #666;
  font-weight: 500;
  position: absolute;
  right: 10px;
  top: 5px;
  cursor: pointer;
`;

export const StarsContainer = styled.form``;

export const StarsLabel = styled.label<StarsLabelProps>`
  font-size: 40px;
  color: ${(props: StarsLabelProps) =>
    props.checked || props.hovered ? '#fd4' : '#444'};
  padding: 10px;
  flex-direction: row;
  text-align: right;
  transition: all 0.2s ease;
`;

export const StarsInput = styled.input`
  display: none;
`;

export const ReviewFormContainer = styled.form``;

export const ReviewFormHeader = styled.form`
  width: 100%;
  font-size: 25px;
  color: #fe7;
  font-weight: 500;
  margin: 5px 0 20px 0;
  text-align: center;
  transition: all 0.2 ease;
`;

export const TextareaContainer = styled.div`
  height: 100px;
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
`;

export const Textarea = styled.textarea`
  height: 100%;
  width: 100%;
  outline: none;
  color: #eee;
  border: 1px solid #333;
  background: #222;
  padding: 10px;
  font-size: 17px;
  resize: none;
`;

export const ReviewFormButtonContainer = styled.div`
  height: 45px;
  width: 100%;
  margin: 15px 0;
`;

export const ReviewFormButton = styled.button`
  height: 100%;
  width: 100%;
  border: 1px solid #444;
  outline: none;
  background: #222;
  color: #999;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #1b1b1b;
  }
`;
