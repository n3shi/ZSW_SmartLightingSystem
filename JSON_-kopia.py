import json


from typing import Any, List, TypeVar, Callable, Type, cast

T = TypeVar("T")

def from_int(x: Any) -> int:
    assert isinstance(x, int) and not isinstance(x, bool)
    return x

def from_str(x: Any) -> str:
    assert isinstance(x, str)
    return x

def from_list(f: Callable[[Any], T], x: Any) -> List[T]:
    assert isinstance(x, list)
    return [f(y) for y in x]

#def to_class(c: Type[T], x: Any) -> dict:
#    assert isinstance(x, c)
#    return cast(Any, x).to_dict()

class LightSource:
    relay: int
    begin: str
    end: str
    func: str
    func_arg: str

    def __init__(self, relay: int, begin: str, end: str, func: str, func_arg: str) -> None:
        self.relay = relay
        self.begin = begin
        self.end = end
        self.func = func
        self.func_arg = func_arg

    @staticmethod
    def from_dict(obj: Any) -> 'LightSource':
        assert isinstance(obj, dict)
        relay = from_int(obj.get("relay"))
        begin = from_str(obj.get("begin"))
        end = from_str(obj.get("end"))
        func = from_str(obj.get("func"))
        func_arg = from_str(obj.get("funcArg"))
        return LightSource(relay, begin, end, func, func_arg)

#    def to_dict(self) -> dict:
#        result: dict = {}
#        result["relay"] = from_int(self.relay)
#        result["begin"] = from_str(self.begin)
#        result["end"] = from_str(self.end)
#        result["func"] = from_str(self.func)
#        result["funcArg"] = from_str(self.func_arg)
#        return result

class WelcomeElement:
    name: str
    light_sources: List[LightSource]

    def __init__(self, name: str, light_sources: List[LightSource]) -> None:
        self.name = name
        self.light_sources = light_sources

    @staticmethod
    def from_dict(obj: Any) -> 'WelcomeElement':
        assert isinstance(obj, dict)
        name = from_str(obj.get("name"))
        light_sources = from_list(LightSource.from_dict, obj.get("LightSources"))
        return WelcomeElement(name, light_sources)

#    def to_dict(self) -> dict:
#        result: dict = {}
#        result["name"] = from_str(self.name)
#        result["LightSources"] = from_list(lambda x: to_class(LightSource, x), self.light_sources)
#        return result

def welcome_from_dict(s: Any) -> List[WelcomeElement]:
    return from_list(WelcomeElement.from_dict, s)

#def welcome_to_dict(x: List[WelcomeElement]) -> Any:
#    return from_list(lambda x: to_class(WelcomeElement, x), x)



#json_string = open('json_data.json', "r").read()
#result = welcome_from_dict(json.loads(json_string))
#
#
#
#
#for x in range(len(result)):
#    print (x)
#
#for x in result:
#    print(x.name)
#
#print(result[0].light_sources[0].relay)
#
#
