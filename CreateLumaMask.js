const batchPlay= require("photoshop").action.batchPlay;

const createLumaMask= async () =>
{
  await batchPlay([

    {
       "_obj": "make",
       "new": {
          "_class": "channel"
       },
       "at": {
          "_ref": "channel",
          "_enum": "channel",
          "_value": "mask"
       },
       "using": {
          "_enum": "userMaskEnabled",
          "_value": "revealAll"
       },
       "_isCommand": true
    },

    {
       "_obj": "select",
       "_target": [
          {
             "_ref": "channel",
             "_enum": "ordinal",
             "_value": "targetEnum"
          }
       ],
       "makeVisible": false,
       "_isCommand": true
    },

    {
       "_obj": "applyImageEvent",
       "with": {
          "_obj": "calculation",
          "to": {
             "_ref": [
                {
                   "_ref": "channel",
                   "_enum": "channel",
                   "_value": "RGB"
                },
                {
                   "_ref": "layer",
                   "_enum": "ordinal",
                   "_value": "merged"
                }
             ]
          },
          "preserveTransparency": true
       },
       "_isCommand": true
    }

  ],{})
}

// problem
// when running
// await createLumaMask()
// Promise {<pending>}[[PromiseState]]: "rejected"[[PromiseResult]]:
//  Error: Event: make may modify the state of Photoshop.
//  Such events are only allowed from inside a modal scopecode: "1000"
//  number: 1000message:
//  "Event: make may modify the state of Photoshop. Such events are only allowed from inside a modal scope"
//  stack: "Error: Event: make may modify the state of Photoshop. Such events are only allowed from inside a modal scope"
