from Tkinter import *
import crypt

# a subclass of Canvas for dealing with resizing of windows
class ResizingCanvas(Canvas):
    def __init__(self,parent,**kwargs):
        Canvas.__init__(self,parent,**kwargs)
        self.bind("<Configure>", self.on_resize)
        self.height = self.winfo_reqheight()
        self.width = self.winfo_reqwidth()

    def on_resize(self,event):
        # determine the ratio of old width/height to new width/height
        wscale = float(event.width)/self.width
        hscale = float(event.height)/self.height
        self.width = event.width
        self.height = event.height
        # resize the canvas 
        self.config(width=self.width, height=self.height)
        # rescale all the objects tagged with the "all" tag
        self.scale("all",0,0,wscale,hscale)

def main():
    root = Tk()

    button = Button(root, text = "Encrypt", command = crypt.encrypt)
    button.pack(fill=BOTH, expand=NO)

    E1 = Entry(root)
    E1.pack(fill=BOTH, expand=YES)
    print E1.get()

    myframe = Frame(root)
    myframe.pack(fill=BOTH, expand=YES)
    mycanvas = ResizingCanvas(myframe,width=850, height=400, bg="grey22", highlightthickness=0)
    mycanvas.pack(fill=BOTH, expand=YES)

    # add some widgets to the canvas


    # tag all of the drawn widgets
    mycanvas.addtag_all("all")
    root.mainloop()

if __name__ == "__main__":
    main()