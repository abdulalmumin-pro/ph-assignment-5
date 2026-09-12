### Project Name:

**Stack Management App**

### Description:

This project is a simple app for managing items in a stack. Users can add and remove items easily.

### Technologies Used:

* React
* JavaScript
* JSX
* Tailwind CSS
* JSON

### 3 Features:

1. **Add items** to the stack.
2. **Remove items** from the stack.
3. **Show an empty message** when there are no items.



# Question solved

1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript.
It makes React code easier to read.

2.What is the difference between props and state?
Props: Data sent from a parent to a child.
State: Data that belongs to a component and can change.
3. What does the useState hook do, and where did you use it in this project?

useState stores data that can change in a component.
I used it to store things like stack/list data and update the screen.

4.What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code when something happens, such as when a page loads.
I used it to load the JSON data when the component started.

5. Why does every item in a .map() list need a unique key prop?

The key helps React identify each item.
It helps React update the list correctly.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).

It means showing something only when a condition is true.
Example: If the stack is empty, we show "Stack is empty".

7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?


Parent → Child: Pass data using props.
Child → Parent: Pass a function as a prop, then the child calls that function.
