// reducer 함수는 if 대신 switch 문법 사용이 관례
// 결과는 같지만 가독성이 좋음
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        },
      ];
    }

    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }

    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }

    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
