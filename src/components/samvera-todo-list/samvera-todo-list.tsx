import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'samvera-todo-list',
  styleUrl: 'samvera-todo-list.css',
  shadow: true,
})
export class SamveraTodoList {
  @State() todos: string[] = ['foo', 'bar'];
  @State() inputVal: string;

  handleClick() {
    this.todos = [...this.todos, this.inputVal];
    this.inputVal = '';
  }

  handleChange(event) {
    this.inputVal = event.target.value;
  }

  render() {
    return (
      <Host>
        <div class="row">
          <div class="column">
            <form>
              <label htmlFor="todoField">New Todo:</label>
              <input type="text" name="todoField" id="todoField" value={this.inputVal} onInput={event => this.handleChange(event)} />
            </form>
            <button class="button" onClick={() => this.handleClick()}>Add To Do</button>
          </div>
          <div class="column">
            <h3>To Do List:</h3>
            <ul>
              {this.todos.map(todo => (
                <li>{todo}</li>
              ))}
            </ul>
          </div>
        </div>


      </Host>
    );
  }

}
