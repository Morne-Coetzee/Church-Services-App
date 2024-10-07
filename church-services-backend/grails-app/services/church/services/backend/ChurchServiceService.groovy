package church.services.backend

import grails.gorm.transactions.Transactional

@Transactional
class ChurchServiceService {
    ChurchService get(Serializable id) {
        ChurchService.findById(id)
    }

    List<ChurchService> list(Map args) {
        ChurchService.findAll(args)
    }

    Long count() {
        ChurchService.count()
    }

    void delete(Serializable id) {
        ChurchService.findById(id)?.delete()
    }

    ChurchService save(ChurchService churchService) {
        churchService.save(flush: true)
    }

    List<ChurchService> getAllChurchServices() {
        ChurchService.findAll()
    }
}