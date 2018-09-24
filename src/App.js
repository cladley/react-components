import React, { Component } from "react";
import Accordion from "./components/Accordion";
import PopoutImage from "./components/PopoutImage";
import ScrollSpy from "./components/ScrollSpy";
import logo from "./logo.svg";
import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Accordion>
//           <Accordion.Item title="Toggle 1" open={true}>
//             With this code, our FormField component will now accept input,
//             select, textarea, or our custom RadioGroup component. Our RadioGroup
//             component will in turn validate that it's children are labels each
//             containing a single input of type radio, or checkbox.
//           </Accordion.Item>
//           <Accordion.Item title="Toggle 2">Content 2</Accordion.Item>
//         </Accordion>

//         <div className="content">
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis at
//             dicta, sit dolorem sequi ipsa dolor mollitia error distinctio minus
//             optio qui harum quas ex? Molestiae debitis iure sed hic.
//           </p>
//           <PopoutImage src="../rinjani-small.jpeg" largeSrc="../rinjani.jpeg" />
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis at
//             dicta, sit dolorem sequi ipsa dolor mollitia error distinctio minus
//             optio qui harum quas ex? Molestiae debitis iure sed hic.
//           </p>

//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis at
//             dicta, sit dolorem sequi ipsa dolor mollitia error distinctio minus
//             optio qui harum quas ex? Molestiae debitis iure sed hic.
//             <PopoutImage
//               className="yooo"
//               src="../rinjani-small.jpeg"
//               largeSrc="../rinjani.jpeg"
//             />
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis at
//             dicta, sit dolorem sequi ipsa dolor mollitia error distinctio minus
//             optio qui harum quas ex? Molestiae debitis iure sed hic. Lorem ipsum
//             dolor sit, amet consectetur adipisicing elit. Quis at dicta, sit
//             dolorem sequi ipsa dolor mollitia error distinctio minus optio qui
//             harum quas ex? Molestiae debitis iure sed hic.
//           </p>

//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis at
//             dicta, sit dolorem sequi ipsa dolor mollitia error distinctio minus
//             optio qui harum quas ex? Molestiae debitis iure sed hic.
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="main">
        <ScrollSpy>
        <div className="sidebar">
            <ScrollSpy.Indicator id="introduction">
              {({isActive, scrollToItemOnClick}) => {
                const cls = isActive ? 'is-active' : '';
                return <h4 className={cls} onClick={scrollToItemOnClick}>Introduction</h4>;
              }}
            </ScrollSpy.Indicator>
            <ScrollSpy.Indicator id="problems">
            {({isActive, scrollToItemOnClick}) => {
                const cls = isActive ? 'is-active' : '';
                return <h4 className={cls} onClick={scrollToItemOnClick}>Problems</h4>;
              }}
            </ScrollSpy.Indicator>
            <ScrollSpy.Indicator id="study">
            {({isActive, scrollToItemOnClick}) => {
                const cls = isActive ? 'is-active' : '';
                return <h4 className={cls} onClick={scrollToItemOnClick}>Study</h4>;
              }}
            </ScrollSpy.Indicator>
            <ScrollSpy.Indicator id="motivation">
            {({isActive, scrollToItemOnClick}) => {
                const cls = isActive ? 'is-active' : '';
                return <h4 className={cls} onClick={scrollToItemOnClick}>Motivation</h4>;
              }}
            </ScrollSpy.Indicator>
            <ScrollSpy.Indicator id="understanding">
            {({isActive, scrollToItemOnClick}) => {
                const cls = isActive ? 'is-active' : '';
                return <h4 className={cls} onClick={scrollToItemOnClick}>Understanding</h4>;
              }}
            </ScrollSpy.Indicator>
        </div>

        <div className="content">
            <ScrollSpy.Item id="introduction">
              <div>
                <h2>introduction</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
                            
              </div>
            </ScrollSpy.Item>
            <ScrollSpy.Item id="problems">
              <div>
                <h2>Problems</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>

              </div>
            </ScrollSpy.Item>
            <ScrollSpy.Item id="study">
              <div>
                <h2>Study</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>

              </div>
            </ScrollSpy.Item>
            <ScrollSpy.Item id="motivation">
              <div>
                <h2>Motivation</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>

              </div>
            </ScrollSpy.Item>
            <ScrollSpy.Item id="understanding">
              <div>
                <h2>Understanding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>

              </div>
            </ScrollSpy.Item>
            <div>
              <hr></hr>
              <hr></hr>
              <hr></hr>
              <hr></hr>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quam veniam laboriosam sequi at minima veritatis aperiam. Vel iusto quam obcaecati deserunt nulla excepturi mollitia suscipit nisi repellendus optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem quia unde expedita quibusdam cumque consectetur alias beatae perferendis velit aut tenetur quam veritatis ducimus, tempora aliquam possimus reiciendis natus?</p>
              
            </div>
        </div>
      </ScrollSpy>
      </div>
    );
  }
}

export default App;
