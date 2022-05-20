const { LokaliseApi } = require('@lokalise/node-api');
const download = require('download');
const extract = require('extract-zip');
const path = require('path');
const fs = require('fs');

const apiKey = 'd9a77d44b24a2c9de412520a234eb839962902c3';
const projectName = 'Portal';
const scriptPath = (p) => path.join(__dirname, p);

async function main() {
  const lokaliseApi = new LokaliseApi({
    apiKey,
  });

  const projects = await lokaliseApi.projects().list();

  const project = projects.items.find(
    (project) => project.name === projectName,
  );
  const { project_id: projectId } = project;

  try {
    const response = await lokaliseApi
      .files()
      .download(projectId, { format: 'json', original_filenames: false });

    await download(response.bundle_url, scriptPath('./.tmp/zip'));

    await extract(scriptPath(`./.tmp/zip/${projectName}-locale.zip`), {
      dir: scriptPath('../src/i18n'),
    });

    fs.rmSync(scriptPath('./.tmp'), { recursive: true, force: true });
  } catch (e) {
    console.log(e);
  }
}

try {
  main();
} catch (e) {
  console.log(e);
}
