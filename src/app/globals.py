import os

class Globals:

   
    CWD = os.getcwd()


    print('working directory...' + CWD)

  


    TEMPLATE_PATH = CWD + '/src/app/templates'
    STATIC_PATH = '/public'                                 # hostname.com/public/style/bundled.css
    STATIC_FOLDER = CWD + '/src/public/static' 

