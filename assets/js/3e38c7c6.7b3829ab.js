"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8293],{9271:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"Non Technical Project","metadata":{"permalink":"/blog/my-blog/Non Technical Project","source":"@site/my-blog/2022-10-28-Fuel-Cell-Literature-Survey/index.md","title":"Non Technical Project","description":"Fuel cell technology is an important pillar for the wider use of regenerative energy, i.e. via intermediate storage as hydrogen. Replacing fossil fuel burning engines in automotive applications with fuel cells and electrical engines is one of the most promising ways to reduce local CO2 emissions in the mobility and transport sector. Mathematical models of fuel cells can be used to improve their optimal and safe operation in automotive applications.","date":"2022-10-28T00:00:00.000Z","formattedDate":"October 28, 2022","tags":[{"label":"research project","permalink":"/blog/my-blog/tags/research-project"},{"label":"Fuel Cell","permalink":"/blog/my-blog/tags/fuel-cell"},{"label":"automotive","permalink":"/blog/my-blog/tags/automotive"},{"label":"Survey","permalink":"/blog/my-blog/tags/survey"}],"readingTime":0.735,"hasTruncateMarker":false,"authors":[{"name":"Nishank Navelkar","title":"Author","url":"https://github.com/nishanknavelkar","imageURL":"https://github.com/nishanknavelkar.png","key":"nish"}],"frontMatter":{"slug":"Non Technical Project","title":"Non Technical Project","authors":"nish","tags":["research project","Fuel Cell","automotive","Survey"]},"nextItem":{"title":"Developing cost effective prosthetic fingers with automatic grasping mechanism","permalink":"/blog/my-blog/Prosthetic Fingers"}},"content":"Fuel cell technology is an important pillar for the wider use of regenerative energy, i.e. via intermediate storage as hydrogen. Replacing fossil fuel burning engines in automotive applications with fuel cells and electrical engines is one of the most promising ways to reduce local CO2 emissions in the mobility and transport sector. Mathematical models of fuel cells can be used to improve their optimal and safe operation in automotive applications.\\r\\n\\r\\nThis work aims at providing an overview on the current state of the art of fuel cell modeling in automotive applications on the system level, namely of the fuell cell stack and peripheral components required for hydrogen supply, air supply, humidification, and cooling. The focus is on identifying high quality publications, i.e. those with well justified and documented models, and high quality active research groups. The main objective of this work is literature analysis.\\r\\n\\r\\n:::note\\r\\n[Download pdf](./Fuelcell.pdf)"},{"id":"Prosthetic Fingers","metadata":{"permalink":"/blog/my-blog/Prosthetic Fingers","source":"@site/my-blog/2019-05-01-Prosthetic-Fingers/index.md","title":"Developing cost effective prosthetic fingers with automatic grasping mechanism","description":"Introduction","date":"2019-05-01T00:00:00.000Z","formattedDate":"May 1, 2019","tags":[{"label":"bachelors project","permalink":"/blog/my-blog/tags/bachelors-project"},{"label":"robotics","permalink":"/blog/my-blog/tags/robotics"},{"label":"prototyping","permalink":"/blog/my-blog/tags/prototyping"},{"label":"electronics","permalink":"/blog/my-blog/tags/electronics"},{"label":"3D printing","permalink":"/blog/my-blog/tags/3-d-printing"}],"readingTime":9.935,"hasTruncateMarker":false,"authors":[{"name":"Nishank Navelkar","title":"Author","url":"https://github.com/nishanknavelkar","imageURL":"https://github.com/nishanknavelkar.png","key":"nish"}],"frontMatter":{"slug":"Prosthetic Fingers","title":"Developing cost effective prosthetic fingers with automatic grasping mechanism","authors":"nish","tags":["bachelors project","robotics","prototyping","electronics","3D printing"]},"prevItem":{"title":"Non Technical Project","permalink":"/blog/my-blog/Non Technical Project"},"nextItem":{"title":"Welcome","permalink":"/blog/my-blog/welcome"}},"content":"## Introduction\\r\\nAn artificial hand is one that replaces a missing part of the human hand. Prostheses are the artificial replacement for missing human limbs.Throughout history, we can see evidence of people using some sort of devices that helped them to do the tasks much more easily, wood, metal, and other materials were used at first, then lighter materials were being used and then the process evolved to make the devices much more human body like. Nowadays we can see advanced prosthetics that are so much similar to human limbs and mimic the functions as well, but the cost involved is high and since these designs are under the protection of patents there are very less chances of people using them especially in developing or underdeveloped countries, although many open sources crowdfunded companies have come up that help people with their disabilities there is a lot of work to be done to make it affordable. \\r\\n \\r\\n## Problem definition\\r\\nOur problem statement is how we might design, and make available to amputees with a palm but no fingers, prosthetic fingers that adapt instantaneously to the movement of the thumb. The pictures of the amputed hand of the patient is shown below.\\r\\n\\r\\nAmputed Hand (Back view) | Mould of the same hand (Front view)\\r\\n--- | ---\\r\\n![hand](./hand.jpeg) | ![mould](./mould.jpeg)\\r\\n\\r\\n\\r\\n\\r\\n## Design Process\\r\\n\\r\\n![concepts](./concepts.jpeg)\\r\\n\\r\\nWe had to first get a digital model to design our attachment, this was done by 3D scanning the moulds. The aim was to design fingers and an attachment that exactly fit the contours of the amputed hand so as to retain maximum movement of the hand, the project was done with the help of prostodontists and with their consultation the following approach was decided. One concept image is shown above, we were experimenting and looking at the way we could design the fingers and the movement mechanisms such that it exactly matched with the other hand. The image below shows how we scanned the moulds to get the digital copy with which we could further design the attachment.\\r\\n\\r\\n![scanning](./scanning.jpeg)\\r\\n\\r\\n\\r\\nThe 3D scans of both hands(Right and left) are shown below.\\r\\n\\r\\nLeft Hand  | Right hand \\r\\n--- | ---\\r\\n![left-scan](./scan-left.png) | ![right-scan](./scan-right.png) \\r\\n\\r\\nThese scans were done by a 3D scanner, the size of the scans were huge since it was captured in the highest possible resolution, this needed to be reduced for further processing and an opensource software was used to perform simplification and reduce the size.\\r\\n\\r\\nIn order to design an attachment that exactly fit the countours, the best idea was to directly take a portion of the scans and scale it such that it is an exact carbon copy of the hand, this required a couble of tries however it was achieved by using some extensions within Sketchup. I also would like to add that we had done an analysis as to which software to use to do the editing and design, while Catia is very much trused by the industry, obtaining a liscense and the required extensions for 3D printing design was difficult and hence we went with an unusual choice of Sketchup. Sketchup allowed us to visualize the scans which were in the .stl format and maniplate and work with the scans in an intuitive manner. After reducing the size of the .stl files and importing them in Sketchup it was further easy to edit and manipulate the files, some pictures of the scans are shown below.\\r\\n\\r\\nLeft Hand back  | Left hand front\\r\\n--- | ---\\r\\n![handsketch](./hand-sketchup.jpeg)  | ![fronthandsketch](./hand-sketchup-front.jpeg)\\r\\n\\r\\nThe front part of the scans wes cut and some thickness was provided, this then had to go through multiple cleaning processes in order to be sent to a slicer and 3D printed, the process of cleaning the files will be explained in a section below, the edited files and the 3D prints are shown below.\\r\\n\\r\\nAttachment  | Prints\\r\\n--- | ---\\r\\n![attachment](./attachment.jpeg) | ![printedattachment](./attachment-printed.jpeg)\\r\\n![backattachment](./attachment-back.jpeg) | ![printedbackattachment](./attachment-printed-back.jpeg)\\r\\n\\r\\nThe attachment was check in the 3D environment wheter it would fit the hands of the patient, the image shown below shows that enough clearances were provided for the attachment to slide over the amputated hand.\\r\\n\\r\\n![handattachment](./hand-and-attachment.jpeg)\\r\\n\\r\\n## Softwares and Processes\\r\\nThe softwares used to process and edit the files are listed below, \\r\\n1. MeshLab\\r\\n2. MeshMixer\\r\\n3. Netfabb online tool\\r\\n4. SketchUp\\r\\n\\r\\nThe functions of the softwares are described below.\\r\\n\\r\\n#### Meshlab\\r\\nMeshLab is a 3D mesh processing software system that is oriented to the management and processing of unstructured large meshes and provides a set of tools for editing, cleaning, healing, inspecting, rendering, and converting these kinds of meshes. MeshLab is free and open-source software, subject to the requirements of the GNU General Public License (GPL), version 2 or later, and is used as both a complete package and a library powering other software. It is well known in the more technical fields of 3D development and data handling.\\r\\n\\r\\nThe automatic mesh cleaning filters include removal of duplicated, unreferenced vertices, non-manifold edges, vertices, and null faces. Remeshing tools support high-quality simplification based on quadric error measure, various kinds of subdivision surfaces, and two surface reconstruction algorithms from point clouds based on the ball-pivoting technique and on the Poisson surface reconstruction approach. For the removal of noise, usually present in acquired surfaces, MeshLab supports various kinds of smoothing filters and tools for curvature analysis and visualization.\\r\\n\\r\\n#### MeshMixer\\r\\nMeshMixer is a tool made by Autodesk used to modify and work with meshes, it is a part of a suite of free applications developed by Autodesk to work with 3D models and meshes.\\r\\n\\r\\n#### Netfabb online tool\\r\\nThe Netfabb Online Service is an easy-to-use solution for anyone with access to an internet connection and a web browser to repair 3D model files.\\r\\n\\r\\n#### Sketchup\\r\\nGoogle SketchUp is the most intuitive way to design, document and communicate ideas in 3D form. SketchUp is a 3D modeling computer program which is used for a wide range of drawing applications. SketchUp removes many of the time-consuming frustrations of learning how to use the software. SketchUp is designed to be easy to use. To create a line, you simply drag with the mouse; the software automatically makes it straight and attaches it to other lines in the project. The simplicity of the software makes it extremely quick to take a sketch and recreate into any 3D object. SketchUp Free was released as a web-based application which replaces SketchUp Make. Drawings can be saved to the cloud, saved locally as native SKP file or exported as an STL file. We used this software to create and edit the designs for our attachment and fingers. \\r\\n\\r\\nThe design processes are listed below,\\r\\n\\r\\n1. Scanning\\r\\n2. Editing\\r\\n3. Repairing\\r\\n4. Printing\\r\\n\\r\\n#### Scanning\\r\\nThe mould of the amputated was taken and was scanned using a 3D scanner, this provided us with the detailed images of the hand, the contours and the bumps which were the part of the hand. The scans were repaired for imperfections and then exported in .stl format (stl means stereolithography). The scans were of high detail which was not necessary for the design of the attachment and hence the scans were subjected to another round of repair using another software called MeshLab. The mesh was imported in the software and the processes applied. This software has many functions which can be used to remove the details, the functions used were\\r\\n\\r\\na. Simplification: MC Edge collapse\\r\\n\\r\\nb. Simplification: Quadratic Edge Collapse Decimation\\r\\n\\r\\nThe above functions reduce the complexity and decrease the size which is suitable for further editing. The edited mesh is then exported and saved with another name, this file is also in the .stl format and will be further used in the editing process.\\r\\n\\r\\nMeshlab Software | Meshlab Software with attachment\\r\\n--- | ---\\r\\n![meshlab](./meshlab.jpg) | ![meshlabattachment](./meshlab-attachment.jpg)\\r\\n\\r\\n#### Editing\\r\\nThe editing of the scanned meshes is done in Sketchup. The mesh is imported, then it is exploded to highlight the individual triangles, then the unwanted parts of the scans are removed, the above process is shown in the images below.\\r\\n\\r\\nAttachment edited in sketchup | Thumb prosthetic in sketchup\\r\\n--- | ---\\r\\n![finalattachment](./final-attachment.jpg) | ![finalthumbattachment](./final-attachment-thumb.jpg)\\r\\n\\r\\nThe next process is to provide thickness to the scans since they are just in a single layer. This is done using an extension in Sketchup called joint push-pull. The extension has special algorithms that intelligently provide thickness to complex shapes and automatically deletes the overlapping parts and fills in the empty parts to provide a smooth surface. This technique was used to create thickness in the attachment.\\r\\n\\r\\nNext process was to add the hinges, this was again imported in the workspace and then places at the appropriate position in 3D space and then the required support was added. The joining of the hinges cannot be always successful since the meshes should be interweaved without any errors, this, however, can be fixed using another software and the process is explained below.\\r\\n\\r\\n#### Repairing\\r\\nSince the edited meshes can have some problems during editing, it is absolutely necessary to have some repairing process so that the printer prints the files without any errors and the final product matches the exact design from the outside as well as inside. A software called MeshMixer is used to remove holes as well as imperfections from the design. \\r\\n\\r\\nThe mesh is imported in this software and then converted to solid, this shows the internal and external imperfections and then with the other tools we can fill in the holes and export the fixed mesh.\\r\\n\\r\\nThe process, however, does not stop here, another free service called Nettfab online tool is used to further automatically fix the files and to prepare them for printing, the mesh is uploaded and the fixed file downloaded and sent to printing.\\r\\n\\r\\nAttachment during repair | 3D printer\\r\\n--- | ---\\r\\n![repairedattachment](./final-attachment-repaired.jpg) | ![printer3d](./3d-printer.jpg)\\r\\n\\r\\n\\r\\n#### Printing\\r\\nThe files were then processed using a slicer and then printed using a AHA 3D printer which is shown in the figure above.\\r\\n\\r\\n## Movement mechanism\\r\\nNow that the fingers were printed a movement mechanism had to be developed, this was achived by employing a technique based on the paper by [paper reference(will be added later)]. Artificial tendons made of plastic fibres were used , these were directly connected to the motor, the turing of the motor made these fibres to wrap up and reduce in length, this caused the closing movement of the fingers, the rotation in opposite direction reduced the tension and due to the force provided by the rubber bands attached on the joints, the fingers returned at their original position.\\r\\n\\r\\n## Conclusion\\r\\nIn conclusion, the goal of this project was to redesign prosthetic fingers to meet the need of an amputee who has lost her fingers. Following a multi-step design process, the team was able to \\r\\n1. Research and study the design of prosthetic hands so that we could base our design off it.\\r\\n2. Design an attachment that connects fingers and palm of any amputee according to their size. \\r\\n3. Developing a movement mechanism to perform basic tasks such as grasping. \\r\\n4. Achieve these objectives while keeping the cost low.\\r\\n\\r\\nAttaching the final photo of the prosthetic worn by the patient.\\r\\n\\r\\n![finalprosthetic](./final-prosthetic.jpg)\\r\\n\\r\\nThe gif showing the movement mechanism is as shown below.\\r\\n\\r\\n![graspingvideo](./Grasping-video.gif)\\r\\n\\r\\n\\r\\n\x3c!---\\r\\nFinal Note: Certain processes, softwares and techniques used in this project might not be perfect and would seem to be completely different than the industry standards, this is because this project was done by figuring out and tinkering with no guidance from any industry experts, we as students had no idea about rapid prototyping and manufacturing and the challenges that we would face, despite these problems we were able to achieve our objective and demonstrate that it is possible to manufacture cost effective prosthetics. I hope this blog helps anyone who is trying to achieve this objective.\\r\\n--\x3e\\r\\nNote: work in progress...Blog to be updated with more information"},{"id":"welcome","metadata":{"permalink":"/blog/my-blog/welcome","source":"@site/my-blog/2019-04-26-welcome/index.md","title":"Welcome","description":"Welcome to My Site, this site is made with Docusaurus. I intend to store my notes at this place.","date":"2019-04-26T00:00:00.000Z","formattedDate":"April 26, 2019","tags":[{"label":"welcome","permalink":"/blog/my-blog/tags/welcome"},{"label":"hello","permalink":"/blog/my-blog/tags/hello"},{"label":"namaste","permalink":"/blog/my-blog/tags/namaste"}],"readingTime":0.5,"hasTruncateMarker":false,"authors":[{"name":"Nishank Navelkar","title":"Author","url":"https://github.com/nishanknavelkar","imageURL":"https://github.com/nishanknavelkar.png","key":"nish"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["nish"],"tags":["welcome","hello","namaste"]},"prevItem":{"title":"Developing cost effective prosthetic fingers with automatic grasping mechanism","permalink":"/blog/my-blog/Prosthetic Fingers"}},"content":"Welcome to [My Site](https://github.com/nishanknavelkar/blog), this site is made with [Docusaurus](https://docusaurus.io/). I intend to store my notes at this place.\\r\\n\\r\\n\\r\\n\\r\\n[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\r\\n\\r\\nSimply add Markdown files (or folders) to the `blog` directory.\\r\\n\\r\\nRegular blog authors can be added to `authors.yml`.\\r\\n\\r\\nThe blog post date can be extracted from filenames, such as:\\r\\n\\r\\n- `2019-05-30-welcome.md`\\r\\n- `2019-05-30-welcome/index.md`\\r\\n\\r\\nA blog post folder can be convenient to co-locate blog post images:\\r\\n\\r\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\r\\n\\r\\nThe blog supports tags as well!\\r\\n\\r\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."}]}')}}]);