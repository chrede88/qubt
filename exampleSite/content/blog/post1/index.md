---
title: Blog Post with Inline Images
subtitle: "Blog post subtitle :zap:"
summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
date: 2023-11-24
cardimage: photo1_card.jpeg
featureimage: photo1.jpeg
caption: Image caption
authors:
  - Christian: author.jpeg
---
Use the shortcode "figArray" to add images to your blog post. Add your images to a subfolder. Call the figArray shortcode using the following syntax:

```
{{</* figArray subfolder="<subfoldername>" figCaption="Some caption" numCols=2 */>}}
```
Both "figCaption" and "numCols" are optional. The shortcode will try to guess the best number of columns to use for the array of figures if "numCols" is not passed.
You will need one subfolder containing images per call to the shortcode. The image files need to be one of the following types: png, jpg, jpeg or webp.

{{< figArray subfolder="images" figCaption="A nice figure caption :wave:" >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat enim. Ut cursus magna sed luctus auctor. Sed eu augue dignissim, lobortis ipsum eu, dictum nisi. Integer varius ex maximus quam lobortis accumsan. Morbi mollis vulputate metus, aliquam feugiat arcu porta a. Quisque id justo ultricies, lacinia elit quis, pulvinar odio. Fusce feugiat at velit vitae lobortis. Nulla fringilla metus et sem mattis posuere :zap:.

**Heading**
- List item 1
- List item 2
- List item 3

Cras ligula velit, aliquet ac orci dapibus, molestie ultricies libero. Donec at bibendum est. Phasellus vulputate dapibus quam vel accumsan. Curabitur at felis euismod, lobortis urna id, lobortis dolor. Cras tortor ligula, euismod quis lacus faucibus, condimentum fringilla dolor. Mauris in maximus nisi. Phasellus facilisis lacus quis mi cursus, a ornare mi maximus. Nullam nunc lacus, tincidunt varius risus nec, pellentesque vulputate ligula. Etiam id purus et tortor porta mattis. Donec id sapien nulla. Vivamus at malesuada tellus, id ultricies ante. Maecenas ullamcorper mi massa, at rutrum risus aliquet a. Donec sem tortor, molestie quis ex a, faucibus commodo augue. Morbi convallis sem vel tellus facilisis, et sodales felis consequat. Aliquam ut ante tristique, volutpat lectus vestibulum, egestas sapien.

Donec tellus est, faucibus eget ultricies ac, posuere non augue. Fusce ultrices lectus quis nunc lacinia, non tincidunt lectus ultrices. Morbi sodales nisi at felis luctus, eu convallis tortor commodo. Morbi tristique nibh neque, vel tristique dolor laoreet eget. Phasellus felis erat, mattis at suscipit id, faucibus in dolor. In vitae odio at lectus tincidunt dignissim. Fusce risus nisl, hendrerit a ultricies vitae, porta id sapien. Nam elit nunc, hendrerit ut sem quis, ultrices varius leo. Nullam eget lectus in sapien venenatis iaculis at at turpis. Etiam iaculis magna porttitor augue tempus suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam suscipit nibh leo, in pellentesque urna luctus et. Duis diam ipsum, posuere nec tellus sit amet, dignissim feugiat massa. Etiam ut sollicitudin lorem. Quisque commodo libero non mauris viverra malesuada. Morbi vitae auctor felis.

Maecenas ac dignissim dolor. Sed vitae nisl vel ante rutrum tincidunt ac et diam. Integer id dignissim quam. Vestibulum quis enim sit amet tellus tincidunt sagittis ut vitae nunc. Sed hendrerit, quam ut fermentum imperdiet, augue purus cursus felis, in ultricies elit mauris in risus. Morbi hendrerit imperdiet vehicula. Etiam porttitor magna eu quam laoreet ullamcorper. Etiam a erat ante. Curabitur pharetra, lacus in porttitor cursus, libero lacus consectetur dui, sit amet auctor tellus magna et enim. Pellentesque tristique molestie fringilla. Vivamus sit amet tincidunt quam. Morbi eu nisi quam. Nunc ultrices vel sem sit amet aliquam.