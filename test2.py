import json,urllib2
from bs4 import BeautifulSoup
import re
import json
from sys import version_info
import mimetypes
import requests
from pprint import pprint
from urlparse import urlparse

def get_soup(link):
    """
    Return the BeautifulSoup object for input link
    """
    request_object = requests.get(link, auth=('user', 'pass'))
    soup = BeautifulSoup(request_object.content, "lxml")
    return soup


"""def list_finder(ul_lists, dept):    
    lis = []
    print dept
    for ul in uls:
        for li in ul.findAll('li'):
            if li.find('ul'):
                list_finder(li, dept + 1)
            lis.append(li)

        for li in lis:
            f.write(li.text.encode("utf-8"))"""
def dictify(unorderedList, baseURL):
    result = {}
    for li in unorderedList.find_all("li", recursive=  False):
        key = ""
        if "http" not in str(li.find("a")["href"]) and "/" in str(li.find("a")["href"]):
            key = str(baseURL)[0:len(baseURL)-1] + li.find("a")["href"]
        else:
            if li.find("a"):
                key = li.find("a")["href"]
                next(li.stripped_strings)
            else:
                key = next(li.stripped_strings)
        ul = li.find("ul")
        if ul:
            result[key] = dictify(ul, baseURL)
        else:
            result[key] = next(li.stripped_strings)
    return result

def sitemap_exists_url(url,baseURL):
    soup = get_soup(url)
    uls = soup.select("ul")
    dept = 0
    tree = {}
    for ul in uls:    
        try:
            #print "ul start" 
            tree[next(ul.stripped_strings)] = dictify(ul, baseURL)
        except:
            pass
    with open("Links.json","w+") as linkJSON:
            json.dump(tree, linkJSON)

"""def div(soup):
    

def table(soup):
    soup.find_all("td") """       


if __name__ == "__main__":
    url = str(raw_input("Input url: "))
    sitemap_exists = True
    if sitemap_exists:
        url_parsed = urlparse(url)
        baseURL = '{uri.scheme}://{uri.netloc}/'.format(uri=url_parsed)
        sitemap_exists_url(url, baseURL)
    else:
        scrapWithNoUrl = Scrapper(url)
        scrapWithNoUrl.main()
        
#list_finder(uls, dept)
