// Top-level API is a function

// return a function that require one argument 'title'
module.exports = title => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>${title}</title>
  </head>
  <body>

  </body>
  </html>
`;
