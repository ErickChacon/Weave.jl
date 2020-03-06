var documenterSearchIndex = {"docs":
[{"location":"chunk_options/#Chunk-options-1","page":"Chunk options","title":"Chunk options","text":"","category":"section"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"I've mostly followed Knitr's naming for chunk options, but not all options are implemented.","category":"page"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"Options are separated using \";\" and need to be valid Julia expressions. Example: markdown code chunk that saves and displays a 12 cm wide image and hides the source code:","category":"page"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"julia; out_width=\"12cm\"; echo=false","category":"page"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"Weave currently supports the following chunk options with the following defaults:","category":"page"},{"location":"chunk_options/#Options-for-code-1","page":"Chunk options","title":"Options for code","text":"","category":"section"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"echo = true. Echo the code in the output document. If false the source code will be hidden.\nresults = \"markup\". The output format of the printed results. \"markup\" for literal block, \"hidden\" for hidden results or anything else for raw output (I tend to use ‘tex’ for Latex and ‘rst’ for rest. Raw output is useful if you wan’t to e.g. create tables from code chunks.\neval = true. Evaluate the code chunk. If false the chunk won’t be executed.\nterm=false. If true the output emulates a REPL session. Otherwise only stdout and figures will be included in output.\nlabel. Chunk label, will be used for figure labels in Latex as fig:label\nwrap = true. Wrap long lines from output.\nline_width = 75. Line width for wrapped lines.\ncache = false. Cache results, depends on cache parameter on weave function.\nhold = false. Hold all results until the end of the chunk.\ntangle = true. Set tangle to false to exclude chunk from tangled code.","category":"page"},{"location":"chunk_options/#Options-for-figures-1","page":"Chunk options","title":"Options for figures","text":"","category":"section"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"fig_width. Figure width passed to plotting library e.g. 800\nfig_height Figure height passed to plotting library\nout_width. Width of saved figure in output markup e.g. \"50%\", \"12cm\", 0.5\\linewidth\nout_height. Height of saved figure in output markup\ndpi=96. Resolution of saved figures.\nfig_cap. Figure caption.\nlabel. Chunk label, will be used for figure labels in Latex as fig:label\nfig_ext. File extension (format) of saved figures.\nfig_pos=\"!h\". Figure position in Latex.\nfig_env=\"figure\". Figure environment in Latex.","category":"page"},{"location":"chunk_options/#Set-default-chunk-options-1","page":"Chunk options","title":"Set default chunk options","text":"","category":"section"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"You can set the default chunk options (and weave arguments) for a document using the YAML header options field. e.g to set the default out_width of all figures you can use:","category":"page"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"---\noptions:\n      out_width : 50%\n---","category":"page"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"You can also set or change the default chunk options for a document either before weave using the set_chunk_defaults function.","category":"page"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"set_chunk_defaults\nget_chunk_defaults\nrestore_chunk_defaults","category":"page"},{"location":"chunk_options/#Weave.set_chunk_defaults","page":"Chunk options","title":"Weave.set_chunk_defaults","text":"set_chunk_defaults(opts::Dict{Symbol, Any})\n\nSet default options for code chunks, use get_chunk_defaults to see the current values.\n\nE.g.: set default dpi to 200 and fig_width to 8\n\njulia> set_chunk_defaults(Dict{Symbol, Any}(:dpi => 200, fig_width => 8))\n\n\n\n\n\n","category":"function"},{"location":"chunk_options/#Weave.get_chunk_defaults","page":"Chunk options","title":"Weave.get_chunk_defaults","text":"get_chunk_defaults()\n\nGet default options used for code chunks.\n\n\n\n\n\n","category":"function"},{"location":"chunk_options/#Weave.restore_chunk_defaults","page":"Chunk options","title":"Weave.restore_chunk_defaults","text":"restore_chunk_defaults()\n\nRestore Weave.jl default chunk options\n\n\n\n\n\n","category":"function"},{"location":"publish/#Publishing-to-html-and-pdf-1","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"","category":"section"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"You can also publish any supported input format using markdown for doc chunks to html and pdf documents. Producing pdf output requires that you have pdflatex installed and in your path.","category":"page"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"You can use a YAML header in the beginning of the input document delimited with \"–-\" to set the document title, author and date e.g.","category":"page"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"---\ntitle : Weave example\nauthor : Matti Pastell\ndate: 15th December 2016\n---","category":"page"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"Here is a a sample document and output:","category":"page"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"FIRdesignplots.jl, FIRdesignplots.html , FIRdesignplots.pdf.","category":"page"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"weave(\"FIR_design_plots.jl\")\nweave(\"FIR_design_plots.jl\", docformat = \"md2pdf\")","category":"page"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"Note: docformats md2pdf and md2html use Julia markdown and pandoc2pdf and pandoc2html use Pandoc.","category":"page"},{"location":"publish/#Templates-1","page":"Publishing to html and pdf","title":"Templates","text":"","category":"section"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"You can use a custom template with md2pdf and md2html formats with template argument (e.g) weave(\"FIR_design_plots.jl\", template = \"custom.tpl\"). You can use the existing templates as starting point.","category":"page"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"For HTML: julia_html.tpl and LaTex: julia_tex.tpl","category":"page"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"Templates are rendered using Mustache.jl.","category":"page"},{"location":"publish/#Supported-Markdown-syntax-1","page":"Publishing to html and pdf","title":"Supported Markdown syntax","text":"","category":"section"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"The markdown variant used by Weave is Julia markdown. In addition Weave supports few additional Markdown features:","category":"page"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"Comments","category":"page"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"You can add comments using html syntax: <!-- -->","category":"page"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"Multiline equations","category":"page"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"You can add multiline equations using:","category":"page"},{"location":"publish/#","page":"Publishing to html and pdf","title":"Publishing to html and pdf","text":"$$\nx^2 = x*x\n$$","category":"page"},{"location":"usage/#Using-Weave-1","page":"Using Weave","title":"Using Weave","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can write your documentation and code in input document using Markdown, Noweb or script syntax and use weave function to execute to document to capture results and figures.","category":"page"},{"location":"usage/#Weave-1","page":"Using Weave","title":"Weave","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Weave document with markup and julia code using Plots.jl for plots, out_path = :pwd makes the results appear in the current working directory.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"#First add depencies for the example\nusing Pkg; Pkg.add.([\"Plots\", \"DSP\"])\nusing Weave\nweave(joinpath(dirname(pathof(Weave)), \"../examples\", \"FIR_design.jmd\"), out_path=:pwd)","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"weave(source)","category":"page"},{"location":"usage/#Weave.weave-Tuple{Any}","page":"Using Weave","title":"Weave.weave","text":"weave(source ; doctype = :auto,\n    informat=:auto, out_path=:doc, args = Dict(),\n    mod::Union{Module, Symbol} = Main,\n    fig_path = \"figures\", fig_ext = nothing,\n    cache_path = \"cache\", cache=:off,\n    template = nothing, highlight_theme = nothing, css = nothing,\n    pandoc_options = \"\",\n    latex_cmd = \"xelatex\")\n\nWeave an input document to output file.\n\ndoctype: :auto = set based on file extension or specify one of the supported formats. See list_out_formats()\ninformat: :auto = set based on file extension or set to  \"noweb\", \"markdown\" or  script\nout_path: Path where the output is generated. Can be: :doc: Path of the source document, :pwd:  Julia working directory, \"somepath\": output directory as a String e.g \"/home/mpastell/weaveout\" or filename as  string e.g. ~/outpath/outfile.tex.\nargs: dictionary of arguments to pass to document. Available as WEAVE_ARGS\nmod: Module where Weave evals code. Defaults to :sandbox  to create new sandbox module, you can also pass a module e.g. Main.\nfig_path: where figures will be generated, relative to out_path\nfig_ext: Extension for saved figures e.g. \".pdf\", \".png\". Default setting depends on doctype.\ncache_path: where of cached output will be saved.\ncache: controls caching of code: :off = no caching, :all = cache everything, :user = cache based on chunk options, :refresh, run all code chunks and save new cache.\nthrow_errors: if false errors are included in output document and the whole document is   executed. if true errors are thrown when they occur.\ntemplate: Template (file path) or MustacheTokens for md2html or md2tex formats.\nhighlight_theme: Theme (Highlights.AbstractTheme) for used syntax highlighting\ncss: CSS (file path) used for md2html format\npandoc_options: String array of options to pass to pandoc for pandoc2html and  pandoc2pdf formats e.g. [\"–toc\", \"-N\"]\nlatex_cmd: the command used to make pdf from .tex\nlatex_keep_unicode: if set to true (default is false), do not convert unicode characters to their\n\nrespective latex representation. This is especially useful if a font and tex-engine with support for unicode characters are used.\n\nNote: Run Weave from terminal and not using IJulia, Juno or ESS, they tend to mess with capturing output.\n\n\n\n\n\n","category":"method"},{"location":"usage/#Tangle-1","page":"Using Weave","title":"Tangle","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Tangling extracts the code from document:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"tangle(source)","category":"page"},{"location":"usage/#Weave.tangle-Tuple{Any}","page":"Using Weave","title":"Weave.tangle","text":"tangle(source ; out_path=:doc, informat=\"noweb\")\n\nTangle source code from input document to .jl file.\n\ninformat: \"noweb\" of \"markdown\"\nout_path: Path where the output is generated. Can be: :doc: Path of the source document, :pwd: Julia working directory,  \"somepath\", directory name as a string e.g \"/home/mpastell/weaveout\"\n\nor filename as string e.g. ~/outpath/outfile.jl.\n\n\n\n\n\n","category":"method"},{"location":"usage/#Supported-output-formats-1","page":"Using Weave","title":"Supported output formats","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Weave sets the output format based on the file extension, but you can also set it using doctype option. The rules for detecting the format are:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"ext == \".jl\" && return \"md2html\"\ncontains(ext, \".md\") && return \"md2html\"\ncontains(ext, \".rst\") && return \"rst\"\ncontains(ext, \".tex\") && return \"texminted\"\ncontains(ext, \".txt\") && return \"asciidoc\"\nreturn \"pandoc\"","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can get a list of supported output formats:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"using Weave # hide\nlist_out_formats()","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"list_out_formats()","category":"page"},{"location":"usage/#Weave.list_out_formats-Tuple{}","page":"Using Weave","title":"Weave.list_out_formats","text":"list_out_formats()\n\nList supported output formats\n\n\n\n\n\n","category":"method"},{"location":"usage/#Document-syntax-1","page":"Using Weave","title":"Document syntax","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Weave uses markdown, Noweb or script syntax for defining the code chunks and documentation chunks. You can also weave Jupyter notebooks. The format is detected based on the file extension, but you can also set it manually using the informat parameter.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"The rules for autodetection are:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"ext == \".jl\" && return \"script\"\next == \".jmd\" && return \"markdown\"\next == \".ipynb\" && return \"notebook\"\nreturn \"noweb\"","category":"page"},{"location":"usage/#Documentation-chunks-1","page":"Using Weave","title":"Documentation chunks","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"In Markdown and Noweb input formats documentation chunks are the parts that aren't inside code delimiters. Documentation chunks can be written with several different markup languages.","category":"page"},{"location":"usage/#Code-chunks-1","page":"Using Weave","title":"Code chunks","text":"","category":"section"},{"location":"usage/#Markdown-format-1","page":"Using Weave","title":"Markdown format","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Markdown code chunks are defined using fenced code blocks with options following on the same line. e.g. to hide code from output you can use:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":" ```julia; echo=false","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Sample document","category":"page"},{"location":"usage/#Inline-code-1","page":"Using Weave","title":"Inline code","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can also add inline code to your documents using","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"`j juliacode`","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"or","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"! juliacode","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"syntax. Using the j code syntax you can insert code anywhere in a line and with   the ! syntax the whole line after ! will be executed. The code will be replaced with captured output in the weaved document.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"If the code produces figures the filename or base64 encoded string will be added to output e.g. to include a Plots figure in markdown you can use:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"![A plot](`j plot(1:10)`)","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"or to produce any html output:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"! display(\"text/html\", \"Header from julia\");","category":"page"},{"location":"usage/#Noweb-format-1","page":"Using Weave","title":"Noweb format","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Code chunks start with a line marked with <<>>= or <<options>>= and end with line marked with @. The code between the start and end markers is executed and the output is captured to the output document. See chunk options.","category":"page"},{"location":"usage/#Script-format-1","page":"Using Weave","title":"Script format","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Weave also support script input format with a markup in comments. These scripts can be executed normally using Julia or published with Weave.  Documentation is in lines starting with #', #%% or # %%, and code is executed and results are included in the weaved document.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"All lines that are not documentation are treated as code. You can set chunk options using lines starting with #+ just before code e.g. #+ term=true.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"The format is identical to Pweave and the concept is similar to publishing documents with MATLAB or using Knitr's spin. Weave will remove the first empty space from each line of documentation.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"See sample document:","category":"page"},{"location":"usage/#Setting-document-options-in-header-1","page":"Using Weave","title":"Setting document options in header","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can use a YAML header in the beginning of the input document delimited with \"–-\" to set the document title, author and date e.g. and default document options. Each of Weave command line arguments and chunk options can be set in header using options field. Below is an example that sets document out_path and doctype using the header.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"---\ntitle : Weave example\nauthor : Matti Pastell\ndate: 15th December 2016\noptions:\n  out_path : reports/example.md\n  doctype :  github\n---","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can also set format specific options. Here is how to set different out_path for md2html and md2pdf and set fig_ext for both:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"---\noptions:\n    md2html:\n        out_path : html\n    md2pdf:\n        out_path : pdf\n    fig_ext : .png\n---","category":"page"},{"location":"usage/#Passing-arguments-to-documents-1","page":"Using Weave","title":"Passing arguments to documents","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can pass arguments as dictionary to the weaved document using the args argument to weave. The dictionary will be available as WEAVE_ARGS variable in the document.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"This makes it possible to create the same report easily for e.g. different date ranges of input data from a database or from files with similar format giving the filename as input.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"In order to pass a filename to a document you need call weave using:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"weave(\"mydoc.jmd\", args = Dict(\"filename\" => \"somedata.h5\"))","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"and you can access the filename from document as follows:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":" ```julia\n print(WEAVE_ARGS[\"filename\"])\n ```","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can use the out_path argument to control the name of the output document.","category":"page"},{"location":"usage/#Include-Weave-document-in-Julia-1","page":"Using Weave","title":"Include Weave document in Julia","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can call include_weave on a Weave document to run the contents of all code chunks in Julia.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"include_weave","category":"page"},{"location":"usage/#Weave.include_weave","page":"Using Weave","title":"Weave.include_weave","text":"include_weave(doc, informat=:auto)\ninclude_weave(m::Module, doc, informat=:auto)\n\nInclude code from Weave document calling include_string on all code from doc. Code is run in the path of the include document.\n\n\n\n\n\n","category":"function"},{"location":"getting_started/#Getting-started-1","page":"Getting started","title":"Getting started","text":"","category":"section"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"The best way to get started using Weave.jl is to look at the example input and output documents. Examples for different formats are included in the packages examples directory.","category":"page"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"First have a look at source document using markdown code chunks and Plots.jl for figures: FIR_design.jmd and then see the output in different formats:","category":"page"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"HTML: FIR_design.html\npdf: FIR_design.pdf\nPandoc markdown: FIR_design.txt","category":"page"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"Producing pdf output requires that you have XeLateX installed.","category":"page"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"Add dependencies for the example if needed:","category":"page"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"using Pkg; Pkg.add.([\"Plots\", \"DSP\"])","category":"page"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"Weave the files to your working directory using:","category":"page"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"using Weave\n#HTML\nweave(joinpath(dirname(pathof(Weave)), \"../examples\", \"FIR_design.jmd\"),\n  out_path=:pwd,\n  doctype = \"md2html\")\n#pdf\nweave(joinpath(dirname(pathof(Weave)), \"../examples\", \"FIR_design.jmd\"),\n  out_path=:pwd,\n  doctype = \"md2pdf\")\n  #Markdown\nweave(joinpath(dirname(pathof(Weave)), \"../examples\", \"FIR_design.jmd\"),\n      doctype=\"pandoc\",\n      out_path=:pwd)","category":"page"},{"location":"notebooks/#Working-with-Jupyter-notebooks-1","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"","category":"section"},{"location":"notebooks/#Weaving-from-Jupyter-notebooks-1","page":"Working with Jupyter notebooks","title":"Weaving from Jupyter notebooks","text":"","category":"section"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"Weave supports using Jupyter notebooks as input format, this means you can weave notebooks to any supported formats. You can't use chunk options with notebooks.","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"weave(\"notebook.ipynb\")","category":"page"},{"location":"notebooks/#Output-to-Jupyter-notebooks-1","page":"Working with Jupyter notebooks","title":"Output to Jupyter notebooks","text":"","category":"section"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"As of Weave 0.5.1. there is new notebook method to convert Weave documents to Jupyter notebooks using nbconvert. The code is not executed by Weave and the output doesn't always work properly, see #116.","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"notebook","category":"page"},{"location":"notebooks/#Weave.notebook","page":"Working with Jupyter notebooks","title":"Weave.notebook","text":"notebook(source::String; out_path=:pwd, timeout=-1, nbconvert_options=\"\", jupyter_path = \"jupyter\")\n\nConvert Weave document source to Jupyter notebook and execute the code using nbconvert. Ignores all chunk options\n\nout_path: Path where the output is generated. Can be: :doc: Path of the source document,  :pwd: Julia working directory, \"somepath\": Path as a   String e.g \"/home/mpastell/weaveout\"\ntimeout: nbconvert cell timeout in seconds. Defaults to -1 (no timeout)\nnbconvert_options: string of additional options to pass to nbconvert, such as --allow-errors\njupyter_path: Path/command for the Jupyter you want to use. Defaults to \"jupyter,\" which runs whatever is linked/alias to that.\n\n\n\n\n\n","category":"function"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"You might want to use the convert_doc method below instead and run the code in Jupyter.","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"You can select the jupyter used to execute the notebook with the jupyter_path argument (this defaults to the string \"jupyter,\" i.e., whatever you have linked to that location.)","category":"page"},{"location":"notebooks/#Converting-between-formats-1","page":"Working with Jupyter notebooks","title":"Converting between formats","text":"","category":"section"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"You can convert between all supported input formats using the convert_doc function.","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"To convert from script to notebook:","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"convert_doc(\"examples/FIR_design.jl\", \"FIR_design.ipynb\")","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"and from notebooks to markdown use:","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"convert_doc(\"FIR_design.ipynb\", \"FIR_design.jmd\")","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"convert_doc(infile::String, outfile::String)","category":"page"},{"location":"notebooks/#Weave.convert_doc-Tuple{String,String}","page":"Working with Jupyter notebooks","title":"Weave.convert_doc","text":"convert_doc(infile::AbstractString, outfile::AbstractString; format = nothing)\n\nConvert Weave documents between different formats\n\ninfile = Name of the input document\noutfile = Name of the output document\nformat = Output format (optional). Detected from outfile extension, but can be set to \"script\", \"markdown\", \"notebook\" or \"noweb\".\n\n\n\n\n\n","category":"method"},{"location":"function_index/#Function-index-1","page":"Function index","title":"Function index","text":"","category":"section"},{"location":"function_index/#","page":"Function index","title":"Function index","text":"","category":"page"},{"location":"#Weave.jl-Scientific-Reports-Using-Julia-1","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"","category":"section"},{"location":"#","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"This is the documentation of Weave.jl. Weave is a scientific report generator/literate programming tool for Julia. It resembles Pweave, knitr, R Markdown, and Sweave.","category":"page"},{"location":"#","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"Current features","category":"page"},{"location":"#","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"Markdown, script of Noweb syntax for input documents\nPublish markdown directly to html and pdf using Julia or Pandoc markdown\nExecute code as terminal or \"script\" chunks\nCapture Plots.jl or  Gadfly.jl figures\nSupports LaTex, Pandoc, GitHub markdown, MultiMarkdown, Asciidoc and reStructuredText output\nSimple caching of results\nConvert to and from IJulia notebooks","category":"page"},{"location":"#","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"(Image: Weave code and output)","category":"page"},{"location":"#Contents-1","page":"Weave.jl - Scientific Reports Using Julia","title":"Contents","text":"","category":"section"},{"location":"#","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"Pages = [\"getting_started.md\", \"usage.md\",\n\"publish.md\", \"chunk_options.md\", \"notebooks.md\",\n\"function_index.md\"]","category":"page"}]
}