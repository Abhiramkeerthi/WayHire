from abc import ABC, abstractmethod


class BaseAnalyzer(ABC):

    @abstractmethod
    def supports(self, url: str) -> bool:
        pass

    @abstractmethod
    def analyze(self, url: str):
        pass