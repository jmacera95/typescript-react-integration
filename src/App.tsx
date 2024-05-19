import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from './actions';
import { StoreState } from './reducers';

interface AppProps {
  todos:  Todo[],
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch Todos List</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateProps = ( {todos}: StoreState): { todos: Todo[] } => {
  return { todos };
}

export const App = connect(
  mapStateProps,
  { fetchTodos }
)(_App);