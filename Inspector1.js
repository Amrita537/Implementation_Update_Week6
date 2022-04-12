const batchPlay = require("photoshop").action.batchPlay;

const result = await batchPlay(
[
   {
      _obj: "get",
      _target: [
         {
            _property: "color"
         },
         {
            _ref: "layer",
            _enum: "ordinal",
            _value: "targetEnum"
         },
      ],
      _options: {
         dialogOptions: "dontDisplay"
      }
   }
],{
   synchronousExecution: false,
   modalBehavior: "fail"
});
const pinned = result[0].color._value;


// ******************code from ps inspector******************//
// const batchPlay = require("photoshop").action.batchPlay;
//
// const result = await batchPlay(
// [
//    {
//       _obj: "get",
//       _target: [
//          {
//             _property: "color"
//          },
//          {
//             _ref: "layer",
//             _id: 11
//          },
//          {
//             _ref: "document",
//             _id: 225
//          }
//       ],
//       _options: {
//          dialogOptions: "dontDisplay"
//       }
//    }
// ],{
//    synchronousExecution: false,
//    modalBehavior: "fail"
// });
// const pinned = result[0];
