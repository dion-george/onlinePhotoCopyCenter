# from PyPDF2 import PdfFileReader
# # pdf = PdfFileReader(open("C:/UsersJaffrey Joy/Desktop/name.pdf",'rb'))
# pdf = PdfFileReader(open("file.pdf",'rb'))
# print(pdf.getNumPages())

#To install PyPDF2 package :- pip install PyPDF2

import sys
pdfname=sys.argv[1]

from PyPDF2 import PdfFileReader

pdf = PdfFileReader(open(pdfname,'rb'))
print(pdf.getNumPages())
