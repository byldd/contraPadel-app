import {View, Text} from 'react-native';
import React from 'react';
import ScreenWrapper from '@/src/components/layouts/screenWrapper/screenWrapper';
import CustomButton from '@/src/components/button/customButton';
import {Row} from '@/src/components/tools';
import {router} from 'expo-router';
import {useQuestionnaireViewModal} from './viewModal';
import {commonStyles} from '@/src/styles/commonStyles';
import {ROUTES} from '@/src/navigation/routes';

const QuestionnaireScreen = () => {
  const {questions, currentQuestion, setCurrentQuestion} =
    useQuestionnaireViewModal();
  return (
    <ScreenWrapper paddingHorizontal>
      {questions.map((item, index) => {
        return (
          <>
            {index === currentQuestion && (
              <>
                <Text style={[commonStyles.text18]}>{item.question}</Text>
                {item.options.map((answer, i) => {
                  return (
                    <>
                      <Text style={[commonStyles.text18]}>{answer}</Text>
                    </>
                  );
                })}
              </>
            )}
          </>
        );
      })}
      <Row justifyContent="space-between">
        <CustomButton
          title="Back"
          outlined
          halfWidth
          onPress={() => router.back()}
        />
        <CustomButton
          title={currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
          halfWidth
          onPress={() => {
            if (currentQuestion === questions.length - 1) {
              router.navigate(ROUTES.HOME);
            } else {
              setCurrentQuestion(currentQuestion + 1);
            }
          }}
        />
      </Row>
    </ScreenWrapper>
  );
};

export default QuestionnaireScreen;
