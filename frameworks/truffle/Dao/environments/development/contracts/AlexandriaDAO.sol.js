"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var AlexandriaDAO = (function (_Pudding) {
    _inherits(AlexandriaDAO, _Pudding);

    function AlexandriaDAO() {
      _classCallCheck(this, AlexandriaDAO);

      _get(Object.getPrototypeOf(AlexandriaDAO.prototype), "constructor", this).apply(this, arguments);
    }

    return AlexandriaDAO;
  })(Pudding);

  ;

  // Set up specific data for this class.
  AlexandriaDAO.abi = [{ "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "proposals", "outputs": [{ "name": "recipient", "type": "address" }, { "name": "amount", "type": "uint256" }, { "name": "description", "type": "string" }, { "name": "votingDeadline", "type": "uint256" }, { "name": "open", "type": "bool" }, { "name": "proposalPassed", "type": "bool" }, { "name": "proposalHash", "type": "bytes32" }, { "name": "proposalDeposit", "type": "uint256" }, { "name": "newCurator", "type": "bool" }, { "name": "yea", "type": "uint256" }, { "name": "nay", "type": "uint256" }, { "name": "creator", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "minTokensToCreate", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "rewardAccount", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "daoCreator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "divisor", "outputs": [{ "name": "divisor", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "extraBalance", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_proposalID", "type": "uint256" }, { "name": "_transactionData", "type": "bytes" }], "name": "executeProposal", "outputs": [{ "name": "_success", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "unblockMe", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "totalRewardToken", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "actualBalance", "outputs": [{ "name": "_actualBalance", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "closingTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "allowedRecipients", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferWithoutReward", "outputs": [{ "name": "success", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "refund", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_recipient", "type": "address" }, { "name": "_amount", "type": "uint256" }, { "name": "_description", "type": "string" }, { "name": "_transactionData", "type": "bytes" }, { "name": "_debatingPeriod", "type": "uint256" }, { "name": "_newCurator", "type": "bool" }], "name": "newProposal", "outputs": [{ "name": "_proposalID", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "DAOpaidOut", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "minQuorumDivisor", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_newContract", "type": "address" }], "name": "newContract", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_recipient", "type": "address" }, { "name": "_allowed", "type": "bool" }], "name": "changeAllowedRecipients", "outputs": [{ "name": "_success", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "halveMinQuorum", "outputs": [{ "name": "_success", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "paidOut", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_proposalID", "type": "uint256" }, { "name": "_newCurator", "type": "address" }], "name": "splitDAO", "outputs": [{ "name": "_success", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "DAOrewardAccount", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "proposalDeposit", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "numberOfProposals", "outputs": [{ "name": "_numberOfProposals", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "lastTimeMinQuorumMet", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_toMembers", "type": "bool" }], "name": "retrieveDAOReward", "outputs": [{ "name": "_success", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "receiveEther", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "isFueled", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_tokenHolder", "type": "address" }], "name": "createTokenProxy", "outputs": [{ "name": "success", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "_proposalID", "type": "uint256" }], "name": "getNewDAOAddress", "outputs": [{ "name": "_newDAO", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_proposalID", "type": "uint256" }, { "name": "_supportsProposal", "type": "bool" }], "name": "vote", "outputs": [{ "name": "_voteID", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "getMyReward", "outputs": [{ "name": "_success", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "rewardToken", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFromWithoutReward", "outputs": [{ "name": "success", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_proposalDeposit", "type": "uint256" }], "name": "changeProposalDeposit", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "blocked", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "curator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "_proposalID", "type": "uint256" }, { "name": "_recipient", "type": "address" }, { "name": "_amount", "type": "uint256" }, { "name": "_transactionData", "type": "bytes" }], "name": "checkProposalCode", "outputs": [{ "name": "_codeChecksOut", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "privateCreation", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "inputs": [{ "name": "_curator", "type": "address" }, { "name": "_daoCreator", "type": "address" }, { "name": "_proposalDeposit", "type": "uint256" }, { "name": "_minTokensToCreate", "type": "uint256" }, { "name": "_closingTime", "type": "uint256" }, { "name": "_privateCreation", "type": "address" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_amount", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_amount", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "value", "type": "uint256" }], "name": "FuelingToDate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "CreatedToken", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Refund", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "proposalID", "type": "uint256" }, { "indexed": false, "name": "recipient", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "newCurator", "type": "bool" }, { "indexed": false, "name": "description", "type": "string" }], "name": "ProposalAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "proposalID", "type": "uint256" }, { "indexed": false, "name": "position", "type": "bool" }, { "indexed": true, "name": "voter", "type": "address" }], "name": "Voted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "proposalID", "type": "uint256" }, { "indexed": false, "name": "result", "type": "bool" }, { "indexed": false, "name": "quorum", "type": "uint256" }], "name": "ProposalTallied", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_newCurator", "type": "address" }], "name": "NewCurator", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_recipient", "type": "address" }, { "indexed": false, "name": "_allowed", "type": "bool" }], "name": "AllowedRecipientChanged", "type": "event" }];
  AlexandriaDAO.binary = "606060405260405160c0806132da8339610120604052905160805160a051925160e0516101005193949293828282600f829055601083905560118054610100830261010060a860020a03199190911617905560405130906001906101bc8061036b8339600160a060020a039390931692019182526020820152604080519182900301906000f060128054600160a060020a031916919091179055505060038054600160a060020a03199081168917909155600e80549091168717905550600c84905560405130906000906101bc806105278339018083600160a060020a0316815260200182815260200192505050604051809103906000f060405160078054600160a060020a0319169290921790915530906000906101bc806106e38339018083600160a060020a0316815260200182815260200192505050604051809103906000f060088054600160a060020a031916919091179055600754600160a060020a0316600014156101c457610002565b50505030600160a060020a03908116600090815260046020526040808220805460ff19908116600190811790925560035490941683529120805490921617905550505050505050612a3b8061089f6000396000f35b600854600160a060020a0316600014156101dd57610002565b4260025560056001908155600080548282558290801582901161016f5782805261016f90600e027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563017f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e571610272565b5050600060098201819055600a820155600d81018054600160a060020a03191690556001015b80821115610367578054600160a060020a03191681556000600182810182905560028381018054848255909281161561010002600019011604601f81901061033957505b506000600383018190556004838101805461ffff19169055600584018290556006840182905560078401805460ff19169055600884018054838255908352602090922061024c929091028101905b808211156103675760008082556001820181815560028301919091556003919091018054600160a060020a0319169055610304565b601f0160209004906000526020600020908101906102b691905b808211156103675760008155600101610353565b50905660606040818152806101bc833960a090525160805160008054600160a060020a03191690921760a060020a60ff0219167401000000000000000000000000000000000000000090910217815561016290819061005a90396000f3606060405236156100405760e060020a60003504630221038a811461004d57806318bdc79a146100aa5780638da5cb5b146100be578063d2cc718f146100d0575b6100d96001805434019055565b6100db6004356024356000805433600160a060020a0390811691161415806100755750600034115b806100a05750805460a060020a900460ff1680156100a057508054600160a060020a03848116911614155b156100f757610002565b6100db60005460ff60a060020a9091041681565b6100ed600054600160a060020a031681565b6100db60015481565b005b60408051918252519081900360200190f35b6060908152602090f35b600160a060020a0383168260608381818185876185025a03f1925050501561015c57604080518381529051600160a060020a038516917f9735b0cb909f3d21d5c16bbcccd272d85fa11446f6d679f6ecb170d2dabfecfc919081900360200190a25060015b929150505660606040818152806101bc833960a090525160805160008054600160a060020a03191690921760a060020a60ff0219167401000000000000000000000000000000000000000090910217815561016290819061005a90396000f3606060405236156100405760e060020a60003504630221038a811461004d57806318bdc79a146100aa5780638da5cb5b146100be578063d2cc718f146100d0575b6100d96001805434019055565b6100db6004356024356000805433600160a060020a0390811691161415806100755750600034115b806100a05750805460a060020a900460ff1680156100a057508054600160a060020a03848116911614155b156100f757610002565b6100db60005460ff60a060020a9091041681565b6100ed600054600160a060020a031681565b6100db60015481565b005b60408051918252519081900360200190f35b6060908152602090f35b600160a060020a0383168260608381818185876185025a03f1925050501561015c57604080518381529051600160a060020a038516917f9735b0cb909f3d21d5c16bbcccd272d85fa11446f6d679f6ecb170d2dabfecfc919081900360200190a25060015b929150505660606040818152806101bc833960a090525160805160008054600160a060020a03191690921760a060020a60ff0219167401000000000000000000000000000000000000000090910217815561016290819061005a90396000f3606060405236156100405760e060020a60003504630221038a811461004d57806318bdc79a146100aa5780638da5cb5b146100be578063d2cc718f146100d0575b6100d96001805434019055565b6100db6004356024356000805433600160a060020a0390811691161415806100755750600034115b806100a05750805460a060020a900460ff1680156100a057508054600160a060020a03848116911614155b156100f757610002565b6100db60005460ff60a060020a9091041681565b6100ed600054600160a060020a031681565b6100db60015481565b005b60408051918252519081900360200190f35b6060908152602090f35b600160a060020a0383168260608381818185876185025a03f1925050501561015c57604080518381529051600160a060020a038516917f9735b0cb909f3d21d5c16bbcccd272d85fa11446f6d679f6ecb170d2dabfecfc919081900360200190a25060015b92915050566060604052361561020e5760e060020a6000350463013cf08b8114610248578063095ea7b3146102d15780630c3b7b96146103465780630e7082031461034f578063149acf9a1461036157806318160ddd146103735780631f2dc5ef1461037c57806321b5b8dd1461039c578063237e9492146103ae57806323b872dd1461040f5780632632bf2014610442578063341458081461047357806339d1f9081461047c5780634b6753bc146104945780634df6d6cc1461049d5780634e10c3ee146104b8578063590e1ae3146104cb578063612e45a3146104dc578063643f7cdd1461057b578063674ed066146105935780636837ff1e1461059c57806370a08231146105e6578063749f98891461060c57806378524b2e1461062557806381f03fcb1461067f57806382661dc41461069757806382bf6464146106b85780638b15a605146106ca5780638d7af473146106d357806396d7f3f5146106e2578063a1da2fb9146106eb578063a3912ec814610705578063a9059cbb14610710578063b7bc2c8414610740578063baac53001461074c578063be7c29c1146107b2578063c9d27afe14610818578063cc9ae3f61461082e578063cdef91d014610842578063dbde19881461085a578063dd62ed3e1461087f578063e33734fd146108b3578063e5962195146108c7578063e66f53b7146108df578063eceb2945146108f1578063f8c80d2614610950575b610967600f546000906234bc00014210801561023a5750601254600160a060020a039081163390911614155b156109795761098133610753565b6109876004356000805482908110156100025750808052600e8202600080516020612a1b83398151915201905060038101546004820154600683015460018401548454600786015460058701546009880154600a890154600d8a0154600160a060020a039586169b509599600201989760ff81811698610100909204811697949691951693168c565b61096760043560243533600160a060020a03908116600081815260156020908152604080832094871680845294825280832086905580518681529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060015b92915050565b61096760105481565b610a7e600754600160a060020a031681565b610a7e600e54600160a060020a031681565b61096760165481565b6109675b60004262127500600f60005054031115610dcf57506014610984565b610a7e601254600160a060020a031681565b60408051602060248035600481810135601f8101859004850286018501909652858552610967958135959194604494929390920191819084018382808284375094965050505050505060006000600060006000600034111561169157610002565b6109676004356024356044355b60115460009060ff1680156104325750600f5442115b80156124cd57506124cb8461044c565b6109676000610981335b600160a060020a0381166000908152600b602052604081205481908114156129b057610b9a565b61096760065481565b6109675b600d5430600160a060020a03163103610984565b610967600f5481565b61096760043560046020526000908152604090205460ff1681565b61096760043560243560006124af610832565b610a9b6000341115610ba557610002565b604080516020604435600481810135601f8101849004840285018401909552848452610967948135946024803595939460649492939101918190840183828082843750506040805160209735808a0135601f81018a90048a0283018a01909352828252969897608497919650602491909101945090925082915084018382808284375094965050933593505060a43591505060006000610e05336105ed565b61096760043560096020526000908152604090205481565b61096760015481565b610a9b60043530600160a060020a031633600160a060020a03161415806105dc5750600160a060020a03811660009081526004602052604090205460ff16155b156121ae576121ab565b6109676004355b600160a060020a0381166000908152601460205260409020545b919050565b6109676004356024356000600034111561257d57610002565b610967600062e6b680420360026000505410806106515750600354600160a060020a0390811633909116145b80156106655750600254621274ff19420190105b156125f85750426002908155600180549091028155610984565b610967600435600a6020526000908152604090205481565b610967600435602435600060006000600060006000341115611b8c57610002565b610a7e600854600160a060020a031681565b610967600c5481565b61096760005460001901610984565b61096760025481565b61096760043560006000600060003411156121df57610002565b6109675b6001610984565b6109676004356024355b60115460009060ff1680156107305750600f5442115b801561246b57506124693361044c565b61096760115460ff1681565b6109676004355b60006000600f600050544210801561076b5750600034115b80156107a557506011546101009004600160a060020a0316600014806107a557506011546101009004600160a060020a0390811633909116145b15610ba057610a9d610380565b610a7e600435600060006000508281548110156100025750508080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56b600e83020180548290811015610002575081526020902060030154600160a060020a0316610607565b61096760043560243560006000611436336105ed565b6109675b6000600034111561246057610002565b61096760043560056020526000908152604090205481565b6109676004356024356044356000612513845b60006000600034111561279157610002565b610967600435602435600160a060020a03828116600090815260156020908152604080832093851683529290522054610340565b610a9b600435600034111561252957610002565b610967600435600b6020526000908152604090205481565b610a7e600354600160a060020a031681565b604080516020606435600481810135601f8101849004840285018401909552848452610967948135946024803595604435956084949201919081908401838280828437509496505050505050506000600060003411156113a757610002565b610a7e6011546101009004600160a060020a031681565b60408051918252519081900360200190f35b610981610709565b90505b90565b604051808d600160a060020a031681526020018c8152602001806020018b81526020018a815260200189815260200188815260200187815260200186815260200185815260200184815260200183600160a060020a0316815260200182810382528c818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015610a645780601f10610a3957610100808354040283529160200191610a64565b820191906000526020600020905b815481529060010190602001808311610a4757829003601f168201915b50509d505050505050505050505050505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b005b604051601254601434908102939093049350600160a060020a03169183900390600081818185876185025a03f150505050600160a060020a038316600081815260146020908152604080832080548601905560168054860190556013825291829020805434019055815184815291517fdbccb92686efceafb9bb7e0394df7f58f71b954061b81afb57109bf247d3d75a9281900390910190a260105460165410801590610b4d575060115460ff16155b15610b95576011805460ff1916600117905560165460408051918252517ff381a3e2428fdda36615919e8d9c35878d9eb0cf85ac6edf575088e80e4c147e9181900360200190a15b600191505b50919050565b610002565b600f5442118015610bb9575060115460ff16155b15610dcd57601260009054906101000a9004600160a060020a0316600160a060020a031663d2cc718f6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505060125460405151600160a060020a0390911631109050610cc7576012546040805160e060020a63d2cc718f0281529051600160a060020a0390921691630221038a913091849163d2cc718f91600482810192602092919082900301816000876161da5a03f11561000257505060408051805160e160020a63011081c5028252600160a060020a039490941660048201526024810193909352516044838101936020935082900301816000876161da5a03f115610002575050505b33600160a060020a0316600081815260136020526040808220549051909181818185876185025a03f19250505015610dcd576040600081812033600160a060020a03169182905260136020908152835191548252925191927fbb28353e4598c3b9199101a66e0989549b659a59a54d2c27fbb183f1932c8e6d92918290030190a26014600050600033600160a060020a0316815260200190815260200160002060005054601660008282825054039250508190555060006014600050600033600160a060020a031681526020019081526020016000206000508190555060006013600050600033600160a060020a03168152602001908152602001600020600050819055505b565b4262054600600f60005054031115610dfd576201518062127500600f60005054034203046014019050610984565b50601e610984565b60001415610e1257610002565b828015610e5c5750866000141580610e2c57508451600014155b80610e445750600354600160a060020a038981169116145b80610e4f5750600034115b80610e5c575062093a8084105b15610e6657610002565b82158015610e865750610e7888610ea0565b1580610e8657506212750084105b15610f4257610002565b83546118d090600160a060020a03165b600160a060020a03811660009081526004602052604081205460ff1680610f355750601254600160a060020a03908116908316148015610f355750601260009054906101000a9004600160a060020a0316600160a060020a031663d2cc718f6040518160e060020a0281526004018090506020604051808303816000876161da5a03f115610002575050604051516006541190505b1561298657506001610607565b6249d400841115610f5257610002565b60115460ff161580610f655750600f5442105b80610f7a5750600c5434108015610f7a575082155b15610f8457610002565b428442011015610f9357610002565b30600160a060020a031633600160a060020a03161415610fb257610002565b6000805460018101808355909190828015829011610fe957600e0281600e028360005260206000209182019101610fe991906110ae565b505060008054929450918491508110156100025750808052600e8302600080516020612a1b8339815191520190508054600160a060020a031916891781556001818101899055875160028084018054600082815260209081902096975091959481161561010002600019011691909104601f908101829004840193918b01908390106111a657805160ff19168380011785555b506111d692915061118e565b5050600060098201819055600a820155600d81018054600160a060020a03191690556001015b808211156111a2578054600160a060020a03191681556000600182810182905560028084018054848255909281161561010002600019011604601f81901061117457505b506000600383018190556004808401805461ffff19169055600584018290556006840182905560078401805460ff191690556008840180548382559083526020909220611088929091028101905b808211156111a257600080825560018201818155600283019190915560039091018054600160a060020a0319169055611140565b601f0160209004906000526020600020908101906110f291905b808211156111a2576000815560010161118e565b5090565b8280016001018555821561107c579182015b8281111561107c5782518260005055916020019190600101906111b8565b50508787866040518084600160a060020a0316606060020a0281526014018381526020018280519060200190808383829060006004602084601f0104600302600f01f150905001935050505060405180910390208160050160005081905550834201816003016000508190555060018160040160006101000a81548160ff02191690830217905550828160070160006101000a81548160ff0219169083021790555082156112bc57600881018054600181018083559091908280158290116112b7576004028160040283600052602060002091820191016112b79190611140565b505050505b600d8082018054600160a060020a031916331790553460068301819055815401905560408051600160a060020a038a16815260208181018a9052918101859052608060608201818152895191830191909152885185937f5790de2c279e58269b93b12828f56fd5f2bc8ad15e61ce08572585c81a38756f938d938d938a938e93929160a084019185810191908190849082908590600090600490601f850104600302600f01f150905090810190601f16801561138c5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a2509695505050505050565b6000805487908110156100025750808052600e8702600080516020612a1b83398151915201905090508484846040518084600160a060020a0316606060020a0281526014018381526020018280519060200190808383829060006004602084601f0104600302600f01f15090500193505050506040518091039020816005016000505414915050949350505050565b6000141561144357610002565b600034111561145157610002565b600080548590811015610002575033600160a060020a03168152600e85027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56e8101602052604090912054600080516020612a1b83398151915291909101915060ff16806114ca5750600c810160205260406000205460ff165b806114d9575060038101544210155b156114e357610002565b82156115295733600160a060020a03166000908152601460209081526040808320546009850180549091019055600b84019091529020805460ff19166001179055611565565b33600160a060020a0316600090815260146020908152604080832054600a850180549091019055600c84019091529020805460ff191660011790555b33600160a060020a03166000908152600b60205260408120541415611591576040600020849055611605565b33600160a060020a03166000908152600b60205260408120548154811015610002579080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e566600e9091020154600382015411156116055733600160a060020a03166000908152600b602052604090208490555b60408051848152905133600160a060020a03169186917f86abfce99b7dd908bec0169288797f85049ec73cbe046ed9de818fab3a497ae09181900360200190a35092915050565b6040805186815260208101839052815189927fdfc78bdca8e3e0b18c16c5c99323c6cb9eb5e00afde190b4e7273f5158702b07928290030190a25b5050505092915050565b6000805488908110156100025750808052600e8802600080516020612a1b833981519152019050600781015490945060ff16156116d3576223988092506116da565b620d2f0092505b600484015460ff1680156116f357506003840154830142115b15611701576117a38761187b565b60038401544210806117185750600484015460ff16155b8061179957508360000160009054906101000a9004600160a060020a03168460010160005054876040518084600160a060020a0316606060020a0281526014018381526020018280519060200190808383829060006004602084601f0104600302600f01f15090500193505050506040518091039020846005016000505414155b15610e9057610002565b611687565b60048401805461ff001916610100179055835460019550600160a060020a0390811630909116148015906117ec57508354600754600160a060020a03908116911614155b801561180857506008548454600160a060020a03908116911614155b801561182457508354601254600160a060020a03908116911614155b801561184057506003548454600160a060020a03908116911614155b156118765760018401805430600160a060020a031660009081526005602052604090208054919091019055546006805490910190555b61164c875b6000600060005082815481101561000257908052600e02600080516020612a1b833981519152018150600481015490915060ff16156118c257600d80546006830154900390555b600401805460ff1916905550565b15156118df576118eb8761187b565b6001915061191c610480565b604051600d8501546006860154600160a060020a0391909116916000919082818181858883f1935050505050611687565b6001850154111561192c57600091505b50600a8301546009840154865191019060049010801590611971575085600081518110156100025790602001015160f860020a900460f860020a02606860f860020a02145b80156119a1575085600181518110156100025790602001015160f860020a900460f860020a02603760f860020a02145b80156119d1575085600281518110156100025790602001015160f860020a900460f860020a0260ff60f860020a02145b8015611a01575085600381518110156100025790602001015160f860020a900460f860020a02601e60f860020a02145b8015611a30575030600160a060020a0316600090815260056020526040902054611a2d90611a48610480565b81105b15611a3a57600091505b6001840154611a6b90611a4a565b015b30600160a060020a031660009081526005602052604081205461298e610480565b8110611abf57604051600d8501546006860154600160a060020a0391909116916000919082818181858883f193505050501515611aa757610002565b4260025560165460059004811115611abf5760056001555b6001840154611acd90611a4a565b8110158015611ae35750600a8401546009850154115b8015611aec5750815b15611876578360000160009054906101000a9004600160a060020a0316600160a060020a0316846001016000505487604051808280519060200190808383829060006004602084601f0104600302600f01f150905090810190601f168015611b685780820380516001836020036101000a031916815260200191505b5091505060006040518083038185876185025a03f19250505015156117a857610002565b611b95336105ed565b60001415611ba257610002565b60008054889081101561000257508052600e87027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e566810154600080516020612a1b833981519152919091019450421080611c0457506003840154622398800142115b80611c1d57508354600160a060020a0390811690871614155b80611c2d5750600784015460ff16155b80611c53575033600160a060020a03166000908152600b8501602052604090205460ff16155b80611c87575033600160a060020a03166000908152600b60205260409020548714801590611c875750604060009081205414155b15611c9157610002565b600884018054600090811015610002579081526020812060030154600160a060020a03161415611dfd57611edc86604051600090600160a060020a038316907f9046fefd66f538ab35263248a44217dcb70e2eb2cd136629e141b8b8f9f03b60908390a260408051600e547fe2faf044000000000000000000000000000000000000000000000000000000008252600160a060020a03858116600484015260248301859052604483018590526223988042016064840152925192169163e2faf04491608480820192602092909190829003018187876161da5a03f1156100025750506040515191506106079050565b6008850180546000908110156100025781815260208082209390935530600160a060020a031681526005909252604082205481549092908110156100025790815260208120905060020155601654600885018054600090811015610002579081526020812090506001015560048401805461ff0019166101001790555b6008840180546000908110156100025781815260208120600101548254909291908110156100025760208082205433600160a060020a03168352601490915260408220548354910293909304955090918110156100025790815260208120905060030154604080517fbaac530000000000000000000000000000000000000000000000000000000000815233600160a060020a0390811660048301529151929091169163baac53009186916024808301926020929190829003018185886185025a03f11561000257505060405151600014159150611f58905057610002565b60088501805460009081101561000257818152602081206003018054600160a060020a03191690931790925580549091908110156100025790815260208120905060030154600160a060020a031660001415611f3757610002565b600d5430600160a060020a0316311015611f5057610002565b611d80610480565b6008840180546000908110156100025781548282526020822060010154929190811015610002579081526020812090506002015433600160a060020a0390811660009081526014602090815260408083205430909416835260058083528184205460099093529083205460088b018054969095029690960497509487020494508593929091908290811015610002575260208120815060030154600160a060020a0390811682526020828101939093526040918201600090812080549095019094553016835260059091529020548290101561203357610002565b30600160a060020a031660009081526005602052604081208054849003905560088501805483926009929091829081101561000257508152602080822060030154600160a060020a03908116835292905260408082208054949094019093553090911681522054819010156120a757610002565b30600160a060020a0390811660009081526009602090815260408083208054869003905533909316808352601482528383205484519081529351929390927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a36121193361086d565b5033600160a060020a03166000908152601460209081526040808320805460168054919091039055839055600a90915281205560019450611687565b30600160a060020a03908116600081815260056020908152604080832080549587168085528285208054979097019096558484528390556009909152808220805494835290822080549490940190935590815290555b50565b604051600160a060020a0382811691309091163190600081818185876185025a03f192505050151561215557610002565b33600160a060020a03818116600090815260096020908152604080832054815160065460085460e060020a63d2cc718f028352935197995091969195929092169363d2cc718f936004848101949193929183900301908290876161da5a03f11561000257505050604051805190602001506005600050600033600160a060020a03168152602001908152602001600020600050540204101561228057610002565b33600160a060020a03908116600090815260096020908152604080832054815160065460085460e060020a63d2cc718f02835293519296909593169363d2cc718f93600483810194929383900301908290876161da5a03f11561000257505050604051805190602001506005600050600033600160a060020a0316815260200190815260200160002060005054020403905083156123d057600860009054906101000a9004600160a060020a0316600160a060020a0316630221038a83600160a060020a0316630e7082036040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505060408051805160e160020a63011081c5028252600160a060020a031660048201526024810186905290516044828101935060209282900301816000876161da5a03f115610002575050604051511515905061243857610002565b6040805160085460e160020a63011081c5028252600160a060020a038581166004840152602483018590529251921691630221038a9160448082019260209290919082900301816000876161da5a03f115610002575050604051511515905061243857610002565b33600160a060020a031660009081526009602052604090208054909101905550600192915050565b6109813361086d565b155b801561248657506124863384845b6000600061291f856105ed565b80156124a257506124a283836000600034111561260057610002565b15610ba057506001610340565b15156124ba57610002565b6124c4838361071a565b9050610340565b155b80156124df57506124df848484612479565b80156124fc57506124fc848484600060003411156126a657610002565b15610ba05750600161250c565b90505b9392505050565b151561251e57610002565b61250984848461041c565b30600160a060020a031633600160a060020a031614158061256e575030600160a060020a0316600090815260056020526040902054606490612569610480565b010481115b1561257857610002565b600c55565b600354600160a060020a03908116339091161461259957610002565b600160a060020a038316600081815260046020908152604091829020805460ff191686179055815185815291517f73ad2a153c8b67991df9459024950b318a609782cee8c7eeda47b905f9baa91f9281900390910190a2506001610340565b506000610984565b33600160a060020a03166000908152601460205260409020548290108015906126295750600082115b1561269e5733600160a060020a03908116600081815260146020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a3506001610340565b506000610340565b600160a060020a0384166000908152601460205260409020548290108015906126ef5750601560209081526040600081812033600160a060020a03168252909252902054829010155b80156126fb5750600082115b1561278957600160a060020a03838116600081815260146020908152604080832080548801905588851680845281842080548990039055601583528184203390961684529482529182902080548790039055815186815291519293927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600161250c565b50600061250c565b600160a060020a038381166000908152600a6020908152604080832054601654600754835160e060020a63d2cc718f02815293519296919591169363d2cc718f9360048181019492939183900301908290876161da5a03f1156100025750506040515190506127ff866105ed565b0204101561280c57610002565b600160a060020a038381166000908152600a6020908152604080832054601654600754835160e060020a63d2cc718f02815293519296919591169363d2cc718f9360048181019492939183900301908290876161da5a03f11561000257505060405151905061287a866105ed565b0204039050600760009054906101000a9004600160a060020a0316600160a060020a0316630221038a84836040518360e060020a0281526004018083600160a060020a03168152602001828152602001925050506020604051808303816000876161da5a03f11561000257505060405151151590506128f857610002565b600160a060020a0383166000908152600a6020526040902080548201905560019150610b9a565b600160a060020a0386166000908152600a602052604090205480850291909104915081111561294d57610002565b600160a060020a038581166000908152600a60205260408082208054859003905591861681522080548201905560019150509392505050565b506000610607565b0160030260166000505483020460016000505460166000505404019050610607565b600160a060020a0383166000908152600b6020526040812054815481101561000257818052600e02600080516020612a1b8339815191520190506003810154909150421115610b9557600160a060020a0383166000908152600b602052604081208190559150610b9a56290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563";

  if ("0x4a8cdd4aef62839f74b083359689eae978e5fe22" != "") {
    AlexandriaDAO.address = "0x4a8cdd4aef62839f74b083359689eae978e5fe22";

    // Backward compatibility; Deprecated.
    AlexandriaDAO.deployed_address = "0x4a8cdd4aef62839f74b083359689eae978e5fe22";
  }

  AlexandriaDAO.generated_with = "1.0.3";
  AlexandriaDAO.contract_name = "AlexandriaDAO";

  return AlexandriaDAO;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.AlexandriaDAO = factory;
}