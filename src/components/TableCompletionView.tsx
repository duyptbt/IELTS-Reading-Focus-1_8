import React from 'react';
import { QuestionItem, Mode, UserAnswerState } from '../types';
import { checkAnswerCorrectness } from '../data/ieltsData';
import { CheckCircle, XCircle, BookOpen, ExternalLink, AlertTriangle, Bug, Sparkles } from 'lucide-react';

interface TableCompletionViewProps {
  questions: QuestionItem[];
  userAnswers: UserAnswerState;
  onAnswerChange: (questionId: number, answer: string) => void;
  checkedQuestions: { [key: number]: boolean };
  mode: Mode;
  isSubmitted: boolean;
  onCheckQuestion?: (questionId: number) => void;
  onJumpToParagraph: (paragraphId: number) => void;
  explanationLanguage: 'bilingual' | 'vi' | 'en';
}

export const TableCompletionView: React.FC<TableCompletionViewProps> = ({
  questions,
  userAnswers,
  onAnswerChange,
  checkedQuestions,
  mode,
  isSubmitted,
  onJumpToParagraph,
  explanationLanguage,
}) => {
  const getQuestion = (num: number) => questions.find((q) => q.questionNumber === num);

  const renderInputField = (questionNumber: number, placeholder = 'one word only...') => {
    const q = getQuestion(questionNumber);
    if (!q) return null;

    const answer = userAnswers[q.id] || '';
    const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;
    const isOverLimit = wordCount > 1; // Strict ONE WORD ONLY
    const isChecked = checkedQuestions[q.id] || (isSubmitted && mode === 'test');
    const isCorrect = isChecked ? checkAnswerCorrectness(q, answer) : false;

    return (
      <span className="inline-flex flex-col mx-1 align-middle my-1">
        <span className="inline-flex items-center gap-1.5">
          <span className="shrink-0 w-6 h-6 rounded-md bg-[#0F172A] text-white text-xs font-bold flex items-center justify-center shadow-xs">
            {questionNumber}
          </span>
          <input
            id={`note-input-q-${q.id}`}
            type="text"
            value={answer}
            onChange={(e) => onAnswerChange(q.id, e.target.value)}
            disabled={isSubmitted && mode === 'test'}
            placeholder={placeholder}
            className={`min-w-[140px] max-w-[210px] sm:min-w-[170px] px-3 py-1 text-xs sm:text-sm rounded-lg border font-sans font-medium outline-none transition-all ${
              isChecked
                ? isCorrect
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-300'
                  : 'border-rose-500 bg-rose-50 text-rose-950 ring-1 ring-rose-300'
                : 'border-slate-300 bg-white hover:border-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900'
            }`}
          />
          {isChecked && (
            <span className="shrink-0">
              {isCorrect ? (
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              ) : (
                <XCircle className="w-4 h-4 text-rose-600" />
              )}
            </span>
          )}
        </span>

        {/* Word count warning for ONE WORD ONLY */}
        {isOverLimit && (
          <span className="text-[10px] text-rose-600 font-semibold mt-0.5 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3 shrink-0" />
            <span>Exceeds ONE word limit ({wordCount}/1)!</span>
          </span>
        )}

        {isChecked && !isCorrect && (
          <span className="text-[10px] text-emerald-700 font-medium mt-0.5">
            Key: <strong className="underline font-bold">{q.officialAnswer}</strong>
          </span>
        )}
      </span>
    );
  };

  return (
    <div className="bg-white border-2 border-slate-300 rounded-2xl shadow-xs overflow-hidden">
      {/* Note Header Banner */}
      <div className="bg-slate-100/90 border-b border-slate-200 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
              Note Completion
            </span>
            <h4 className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight flex items-center gap-2">
              <Bug className="w-4 h-4 text-blue-600" />
              <span>Butterflies in the UK</span>
            </h4>
          </div>
          <p className="text-[11px] text-slate-500 font-medium mt-0.5">
            Complete the notes below using words directly from paragraphs 6 to 9.
          </p>
        </div>
        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs">
          Choose ONE WORD ONLY from the passage
        </span>
      </div>

      {/* Note Completion Sections */}
      <div className="p-4 sm:p-6 space-y-6 text-slate-800 text-sm leading-relaxed">
        {/* Section 1: The Small Blue */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5 transition-all hover:bg-slate-50">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <h5 className="font-bold text-slate-900 text-base">The Small Blue</h5>
            </div>
            <button
              onClick={() => onJumpToParagraph(6)}
              className="inline-flex items-center gap-1 text-[11px] text-blue-700 hover:text-blue-900 font-medium bg-white px-2 py-0.5 rounded border border-blue-200 shadow-2xs cursor-pointer"
              title="Jump to Paragraph 6 (The Small Blue)"
            >
              <BookOpen className="w-3 h-3 text-blue-600" />
              <span>Para 6</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </button>
          </div>

          <ul className="space-y-3 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-slate-400 mt-1 font-bold">•</span>
              <div className="flex-1">
                <span>lives in large</span>
                {renderInputField(7, 'e.g. colonies')}
                {explanationLanguage !== 'en' && (
                  <span className="text-[11px] text-slate-500 italic block mt-0.5">
                    (sống thành những ... lớn / các bầy đàn lớn)
                  </span>
                )}
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-slate-400 mt-1 font-bold">•</span>
              <div className="flex-1">
                <span>first appears at the start of</span>
                {renderInputField(8, 'e.g. spring')}
                {explanationLanguage !== 'en' && (
                  <span className="text-[11px] text-slate-500 italic block mt-0.5">
                    (xuất hiện lần đầu vào thời điểm bắt đầu của ...)
                  </span>
                )}
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-slate-400 mt-1 font-bold">•</span>
              <div className="flex-1 text-slate-600 font-medium">
                <span>completes more than one reproductive cycle per year</span>
                {explanationLanguage !== 'en' && (
                  <span className="text-[11px] text-slate-400 italic block mt-0.5">
                    (hoàn thành nhiều hơn một chu kỳ sinh sản mỗi năm)
                  </span>
                )}
              </div>
            </li>
          </ul>
        </div>

        {/* Section 2: The High Brown Fritillary */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5 transition-all hover:bg-slate-50">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <h5 className="font-bold text-slate-900 text-base">The High Brown Fritillary</h5>
            </div>
            <button
              onClick={() => onJumpToParagraph(7)}
              className="inline-flex items-center gap-1 text-[11px] text-blue-700 hover:text-blue-900 font-medium bg-white px-2 py-0.5 rounded border border-blue-200 shadow-2xs cursor-pointer"
              title="Jump to Paragraph 7 (The High Brown Fritillary)"
            >
              <BookOpen className="w-3 h-3 text-blue-600" />
              <span>Para 7</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </button>
          </div>

          <ul className="space-y-3 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-slate-400 mt-1 font-bold">•</span>
              <div className="flex-1 text-slate-600 font-medium">
                <span>has one reproductive cycle</span>
                {explanationLanguage !== 'en' && (
                  <span className="text-[11px] text-slate-400 italic block mt-0.5">
                    (chỉ có một chu kỳ sinh sản mỗi năm)
                  </span>
                )}
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-slate-400 mt-1 font-bold">•</span>
              <div className="flex-1">
                <span>is considered to be more</span>
                {renderInputField(9, 'e.g. endangered')}
                <span>than other species</span>
                {explanationLanguage !== 'en' && (
                  <span className="text-[11px] text-slate-500 italic block mt-0.5">
                    (được coi là ... hơn các loài khác)
                  </span>
                )}
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-slate-400 mt-1 font-bold">•</span>
              <div className="flex-1">
                <span>its caterpillars occupy a limited range of</span>
                {renderInputField(10, 'e.g. habitat')}
                {explanationLanguage !== 'en' && (
                  <span className="text-[11px] text-slate-500 italic block mt-0.5">
                    (sâu bướm của nó chỉ cư ngụ ở một phạm vi ... hạn chế)
                  </span>
                )}
              </div>
            </li>
          </ul>
        </div>

        {/* Section 3: The Silver-studded Blue */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5 transition-all hover:bg-slate-50">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
              <h5 className="font-bold text-slate-900 text-base">The Silver-studded Blue</h5>
            </div>
            <button
              onClick={() => onJumpToParagraph(8)}
              className="inline-flex items-center gap-1 text-[11px] text-blue-700 hover:text-blue-900 font-medium bg-white px-2 py-0.5 rounded border border-blue-200 shadow-2xs cursor-pointer"
              title="Jump to Paragraph 8 (The Silver-studded Blue)"
            >
              <BookOpen className="w-3 h-3 text-blue-600" />
              <span>Para 8</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </button>
          </div>

          <ul className="space-y-3 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-slate-400 mt-1 font-bold">•</span>
              <div className="flex-1">
                <span>is already able to reproduce twice a year in warm areas of</span>
                {renderInputField(11, 'e.g. Europe')}
                {explanationLanguage !== 'en' && (
                  <span className="text-[11px] text-slate-500 italic block mt-0.5">
                    (đã có khả năng sinh sản hai lần một năm tại các khu vực ấm áp của ...)
                  </span>
                )}
              </div>
            </li>
          </ul>
        </div>

        {/* Section 4: The White Admiral */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5 transition-all hover:bg-slate-50">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
              <h5 className="font-bold text-slate-900 text-base">The White Admiral</h5>
            </div>
            <button
              onClick={() => onJumpToParagraph(9)}
              className="inline-flex items-center gap-1 text-[11px] text-blue-700 hover:text-blue-900 font-medium bg-white px-2 py-0.5 rounded border border-blue-200 shadow-2xs cursor-pointer"
              title="Jump to Paragraph 9 (The White Admiral)"
            >
              <BookOpen className="w-3 h-3 text-blue-600" />
              <span>Para 9</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </button>
          </div>

          <ul className="space-y-3 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-slate-400 mt-1 font-bold">•</span>
              <div className="flex-1">
                <span>is found in</span>
                {renderInputField(12, 'e.g. southern')}
                <span>areas of England</span>
                {explanationLanguage !== 'en' && (
                  <span className="text-[11px] text-slate-500 italic block mt-0.5">
                    (được tìm thấy tại các vùng ... của nước Anh)
                  </span>
                )}
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-slate-400 mt-1 font-bold">•</span>
              <div className="flex-1">
                <span>both climate change and the</span>
                {renderInputField(13, 'e.g. diet')}
                <span>of the caterpillar are possible reasons for decline</span>
                {explanationLanguage !== 'en' && (
                  <span className="text-[11px] text-slate-500 italic block mt-0.5">
                    (cả biến đổi khí hậu lẫn ... của sâu bướm đều là những nguyên nhân tiềm tàng gây suy giảm)
                  </span>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const NoteCompletionView = TableCompletionView;
