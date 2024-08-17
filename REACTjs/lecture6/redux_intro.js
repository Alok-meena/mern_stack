// 1. What is Redux?
// Redux is a state management library that helps you manage the state of your application in a predictable way. It’s especially useful in large applications where passing down props through many components (prop drilling) becomes cumbersome.

// 2. Core Concepts of Redux
// To understand Redux, you need to know about the following concepts:

// Store
// State
// Actions
// Reducers
// Provider
// Let’s go through each one in the context of our Task Management App.

// a. Store
// The store is the single source of truth for your application’s state. It holds the entire state tree of your app, which means all the data that you want to keep track of in your app lives in the store.

// In our project, the store is created in store.js:

// javascript
// Copy code
// import { createStore } from 'redux';
// import rootReducer from '../reducers';

// const store = createStore(rootReducer);

// export default store;
// createStore(rootReducer): This function initializes the store with a reducer. The rootReducer is a combination of all the reducers in the app (we'll cover reducers next).
// b. State
// The state is the data that the store holds. This state can be accessed by any component that needs it. Instead of maintaining individual states within each component, Redux allows you to centralize the state and access it as needed.

// c. Actions
// Actions are payloads of information that send data from your application to the Redux store. They are the only source of information for the store. Actions are plain JavaScript objects that must have a type property (which is usually a string). The type describes what action is being performed, and the payload is the data sent to the reducer.

// In our project, the actions are defined in taskActions.js:

// javascript
// Copy code
// export const addTask = (task) => {
//   return {
//     type: 'ADD_TASK',
//     payload: task,
//   };
// };

// export const deleteTask = (id) => {
//   return {
//     type: 'DELETE_TASK',
//     payload: id,
//   };
// };
// addTask: This action creator returns an action with the type 'ADD_TASK' and a payload containing the task to be added.
// deleteTask: This action creator returns an action with the type 'DELETE_TASK' and a payload containing the ID of the task to be deleted.
// d. Reducers
// Reducers are functions that specify how the application's state changes in response to actions sent to the store. A reducer takes two arguments: the current state and an action. Based on the action type, the reducer determines how to update the state and returns a new state object.

// In our project, the reducer is defined in taskReducer.js:

// javascript
// Copy code
// const initialState = {
//   tasks: [],
// };

// const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TASK':
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };
//     case 'DELETE_TASK':
//       return {
//         ...state,
//         tasks: state.tasks.filter((task) => task.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export default taskReducer;
// initialState: This is the initial state of the application. In this case, it’s an object with an empty tasks array.
// taskReducer: This reducer listens for two action types:
// 'ADD_TASK': Adds a new task to the tasks array.
// 'DELETE_TASK': Removes a task from the tasks array based on its ID.
// e. Root Reducer
// When you have multiple reducers (e.g., taskReducer, userReducer, etc.), you can combine them into a single root reducer using the combineReducers function.

// In our project, the root reducer is defined in index.js within the reducers folder:

// javascript
// Copy code
// import { combineReducers } from 'redux';
// import taskReducer from './taskReducer';

// const rootReducer = combineReducers({
//   tasks: taskReducer,
// });

// export default rootReducer;
// This rootReducer is then passed to the store when it is created.

// f. Provider
// The Provider component from react-redux makes the Redux store available to any nested components that need to access the Redux state. It wraps your entire application, allowing any component within it to connect to the Redux store.

// In our project, the Provider is used in index.js:

// javascript
// Copy code
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store/store';
// import App from './App';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
// <Provider store={store}>: This component wraps your entire app and passes the Redux store to all components inside it.
// 3. Connecting Redux to React
// To connect Redux to React components, we use two main hooks provided by react-redux:

// useSelector: This hook is used to extract data from the Redux store state.
// useDispatch: This hook is used to dispatch actions to the store.
// In our App.js, here’s how we use them:

// javascript
// Copy code
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addTask, deleteTask } from './actions/taskActions';
// import './App.css';

// const App = () => {
//   const [task, setTask] = useState('');
//   const tasks = useSelector((state) => state.tasks.tasks);
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (task.trim()) {
//       dispatch(addTask({ id: Date.now(), name: task }));
//       setTask('');
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Task Manager</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           placeholder="Add a new task"
//         />
//         <button type="submit">Add</button>
//       </form>
//       <ul>
//         {tasks.length > 0 ? (
//           tasks.map((task) => (
//             <li key={task.id}>
//               {task.name}
//               <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
//             </li>
//           ))
//         ) : (
//           <p>No tasks available. Add a new task.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default App;
// useSelector((state) => state.tasks.tasks): This extracts the tasks array from the Redux state.
// useDispatch(): This gives us access to the dispatch function, which we use to send actions to the Redux store.
// 4. Putting It All Together
// Here’s how the flow works:

// User Interaction: The user interacts with the form (e.g., types in a task and clicks "Add").
// Dispatch Action: An action is dispatched to the Redux store using dispatch(addTask({ id: Date.now(), name: task })).
// Reducer: The dispatched action is handled by the reducer (taskReducer), which updates the state (e.g., adds the new task to the tasks array).
// State Update: The store updates the state based on the reducer’s return value.
// Component Re-render: The component re-renders because the state has changed, and the updated tasks list is displayed.
// Conclusion
// Redux is powerful for managing state in large applications because it provides a clear and predictable way to handle state changes. By separating concerns with actions, reducers, and the store, Redux helps you keep your application's state logic organized and manageable, even as your app grows.
