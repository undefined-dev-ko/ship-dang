// commit-config.js

module.exports = {
  prompter: (cz, commit) => {
    const typeChoices = [
      { value: '✨ feat', name: '✨ feat:         새로운 기능' },
      { value: '🐛 fix', name: '🐛 fix:          버그 수정' },
      { value: '📚 docs', name: '📚 docs:         문서 수정' },
      { value: '🔨 refactor', name: '🔨 refactor:     리팩토링' },
      { value: '🚚 chore', name: '🚚 chore:        빌드 과정 또는 보조 도구 수정' },
      { value: '💄 style', name: '💄 style:        스타일 수정' },
      { value: '🔧 config', name: '🔧 config:       설정 수정' },
      { value: '🚀 deploy', name: '🚀 deploy:       배포 수정' },
      { value: '🔥 remove', name: '🔥 remove:       삭제 수정' },
    ];

    const questions = [
      {
        type: 'list',
        name: 'type',
        message: '1️⃣ 커밋 유형을 선택하세요:',
        choices: typeChoices,
      },
      {
        type: 'input',
        name: 'subject',
        message: '2️⃣ 커밋 메시지를 입력하세요:',
        validate: (input) => input.length > 0 && input.length <= 100,
      },
      {
        type: 'confirm',
        name: 'isTicketNumber',
        message: '3️⃣ 이슈 티켓이 있나요?',
        default: false,
      },
      {
        type: 'input',
        name: 'ticketNumber',
        when: (answers) => answers.isTicketNumber,
        message: '3️⃣ 이슈 번호를 입력하세요 (숫자만):',
        validate: (input) => /^\d+$/.test(input),
      },
    ];

    cz.prompt(questions).then((answers) => {
      const { type, subject } = answers;
      const message = `${type}: ${subject}`;

      const divider = '='.repeat(50);
      const decoratedMessage = `
  ${divider}
  ✅ 커밋 메시지가 다음과 같아요! 커밋할까요?
  
  ${message}
  
  ${divider}
  `;

      cz.prompt([
        {
          type: 'confirm',
          name: 'confirmCommit',
          message: decoratedMessage,
          default: true,
        },
      ]).then((confirmAnswer) => {
        if (confirmAnswer.confirmCommit) {
          commit(message);
        } else {
          console.log('❌ 커밋이 취소되었습니다.');
        }
      });
    });
  },
};
