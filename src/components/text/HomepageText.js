const HOMEPAGE_MAIN_TEXT = 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus convallis enim, at lacinia tellus pulvinar in.
Phasellus sed rhoncus ex. Nullam tellus massa, sodales eget sagittis at, egestas ac risus. Donec eleifend nibh et sem faucibus, quis 
congue augue sagittis. Nullam quam erat, gravida quis malesuada non, dapibus bibendum lorem. Quisque posuere dolor nec volutpat pulvinar. 
Nulla vel ex porta, ornare nunc ut, bibendum diam. Proin sed arcu urna. Quisque mauris dui, interdum non euismod a, venenatis sit amet lectus. 
Etiam convallis rhoncus diam vel iaculis. Maecenas finibus, magna vel commodo semper, diam tortor malesuada quam, et fringilla lectus tortor
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus convallis enim, at lacinia tellus pulvinar in.
Phasellus sed rhoncus ex. Nullam tellus massa, sodales eget sagittis at, egestas ac risus. Donec eleifend nibh et sem faucibus, quis 
congue augue sagittis. Nullam quam erat, gravida quis malesuada non, dapibus bibendum lorem. Quisque posuere dolor nec volutpat pulvinar. 
Nulla vel ex porta, ornare nunc ut, bibendum diam. Proin sed arcu urna. Quisque mauris dui, interdum non euismod a, venenatis sit amet lectus. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus convallis enim, at lacinia tellus pulvinar in.
Phasellus sed rhoncus ex. Nullam tellus massa, sodales eget sagittis at, egestas ac risus. Donec eleifend nibh et sem faucibus, quis 
congue augue sagittis. Nullam quam erat, gravida quis malesuada non, dapibus bibendum lorem. Quisque posuere dolor nec volutpat pulvinar. 
Nulla vel ex porta, ornare nunc ut, bibendum diam. Proin sed arcu urna. Quisque mauris dui, interdum non euismod a, venenatis sit amet lectus. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus convallis enim, at lacinia tellus pulvinar in.
Phasellus sed rhoncus ex. Nullam tellus massa, sodales eget sagittis at, egestas ac risus. Donec eleifend nibh et sem faucibus, quis 
congue augue sagittis. Nullam quam erat, gravida quis malesuada non, dapibus bibendum lorem. Quisque posuere dolor nec volutpat pulvinar. 
Nulla vel ex porta, ornare nunc ut, bibendum diam. Proin sed arcu urna. Quisque mauris dui, interdum non euismod a, venenatis sit amet lectus. 
non tortor. Sed condimentum purus non nibh rutrum convallis. Quisque mauris dui, interdum non euismod a, venenatis sit. lectus tortor \newline

Mauris nisi nibh, imperdiet eget neque a, semper suscipit sapien. In placerat, urna ultricies consectetur aliquet, magna lorem consectetur 
nulla, et pulvinar dolor dui et ex. Nunc commodo in tellus ac commodo. Sed scelerisque justo auctor fermentum consequat. Ut consequat lacus 
turpis. Nulla leo est, luctus ac ornare non, pulvinar vitae libero. Phasellus sollicitudin orci sodales velit pharetra feugiat. Phasellus eget 
felis vel elit auctor pulvinar. Ut euismod, augue a dapibus malesuada, enim urna rutrum sapien, id ultrices turpis velit sed sem. Quisque lobortis, 
ligula a volutpat fermentum, mi justo lobortis ex, in pulvinar lacus ante at enim. Duis eleifend neque a libero lacinia semper. Morbi non massa 
feugiat, fringilla nulla sed, tincidunt arcu. In velit turpis, feugiat a lacus sit amet, gravida egestas ipsum. \newline

Phasellus commodo ac ipsum non mattis. Proin fringilla at nibh in porttitor. Praesent ullamcorper ligula eget volutpat dignissim. Morbi rutrum 
viverra tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eu venenatis neque. Curabitur interdum quis eros nec 
faucibus. Cras pulvinar tortor et diam ullamcorper luctus. Phasellus tincidunt ligula ex, sed sodales ex porta vel. \newline

Pellentesque quis posuere dolor. Quisque quis ipsum sit amet metus ultricies cursus in in ante. Suspendisse fermentum enim ante, sed rutrum mi 
posuere quis. Quisque quis enim ante. Proin sed gravida tortor. Integer tempor odio et sem hendrerit iaculis. Pellentesque habitant morbi tristique 
senectus et netus et malesuada fames ac turpis egestas. Aliquam eu imperdiet elit, quis vehicula leo. Donec mattis ac velit vitae convallis. Nullam 
consectetur, eros nec condimentum semper, augue mi accumsan nisl, non tincidunt est odio nec sem. \newline

Proin rhoncus eleifend nisi, mollis efficitur augue interdum eu. Vestibulum efficitur mattis tortor eu maximus. Vivamus pharetra tempor ante, 
in iaculis felis tristique a. Fusce accumsan, tortor vitae viverra consectetur, nibh nibh varius odio, eget tempor risus nisl vitae lacus. Duis 
mollis pulvinar felis, nec sollicitudin magna varius vel. Vestibulum id nunc turpis. Phasellus interdum vehicula neque a venenatis. Nulla in 
viverra turpis, ut placerat est. Sed laoreet congue tellus elementum commodo.`

function getHomepageMainText(){
    return HOMEPAGE_MAIN_TEXT.split('\newline').map((str,i) => <p key={i}>{str}</p>);
}

export default getHomepageMainText;