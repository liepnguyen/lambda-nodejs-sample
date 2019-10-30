import { Sample } from "models";

export const get = async (req, res) => {
  const results = await Sample.query();

  res.send({
    message: 'OK',
    results
  })
}