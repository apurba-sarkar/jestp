import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import App from "../App"
import userEvent from "@testing-library/user-event";

// test("onchange", () => {
//   render(<App />);
//  let input=screen.getByRole("textbox")
//  fireEvent.change(input,{target:{value:'a'}})
//  expect(input.value).toBe("a")
// });

// beforeAll(()=>{
//   console.log("--------------")
// })
// test("click event",()=>{
//  render(<App/>)

//   const btn = screen.getByRole("button",{name:"hello"})
//   fireEvent.click(btn)
//   expect(screen.getByText("hello")).toBeDisabled()
//   // expect(container).toMatchSnapshot();
// })

// test("btns",()=>{
//   render(<App/>)

//   const btn=screen.getAllByRole("button")
//   for(let i=0;i<btn.length;i++){
//     // eslint-disable-next-line jest/valid-expect
//     expect(btn[i]).toBeInTheDocument()
//   }
// })

// test("on change",()=>{
//   // const user = userEvent.setup()
//   const {container,debug} = render(<App />);
//   let el =screen.getByRole("textbox")
//   fireEvent.change(el,{target:{value:"ricdkys"}})
//   expect(el.value).toBe("rickys")
//   // console.log(prettyDOM(container))
//   // eslint-disable-next-line testing-library/no-debugging-utils
//   // debug()
//   logRoles(container)

// })

test("check api",async()=>{
 const {container,debug}= render(<App/>)
  const el = await screen.findAllByRole("listitem")
  expect(el).toHaveLength(4)
// debug()
})